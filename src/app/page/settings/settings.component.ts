import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import {SettingsService} from '../../service/settings.service';
import { UntypedFormControl, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {ConfirmationPopupComponent} from '../../component/confirmation-popup/confirmation-popup.component';
import {AlertService} from '../../service/alert.service';
import {
  ACTION_CANCELLED_MESSAGE,
  APPLY_SETTING_MESSAGE,
  APPLY_SETTING_SUCCESS_MESSAGE,
  COLOR_OPTIONS,
  RESET_EVERYTHING_MESSAGE,
  RESET_EVERYTHING_SUCCESS_MESSAGE,
  RESET_SCORES_MESSAGE,
  RESET_SCORES_SUCCESS_MESSAGE
} from '../../constants/constants';
import { MatFormField, MatError, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgStyle } from '@angular/common';
import { YesNoDropdownComponent } from '../../component/yes-no-dropdown/yes-no-dropdown.component';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatFormField, MatInput, FormsModule, ReactiveFormsModule, MatError, YesNoDropdownComponent, MatLabel, MatSelect, NgStyle, MatOption]
})
export class SettingsComponent implements OnInit, OnDestroy {
  dialog = inject(MatDialog);
  private alertService = inject(AlertService);
  settingsService = inject(SettingsService);

  colors = COLOR_OPTIONS;

  numberOfRoundsControl: UntypedFormControl = new UntypedFormControl('', [
    Validators.min(1),
    Validators.max(1000),
    Validators.pattern('^[0-9.]*$'),
    Validators.required
  ]);
  numberOfPlayersControl: UntypedFormControl = new UntypedFormControl('', [
    Validators.min(1),
    Validators.max(1000),
    Validators.pattern('^[0-9.]*$'),
    Validators.required
  ]);

  titleControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  shouldSortByPlayerControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  showLastRoundControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  usePlayerControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  bonusRoundControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  applyNextRoundControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  colorControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);

  settingsFormGroup: UntypedFormGroup;

  ngOnInit() {
    this.settingsFormGroup = new UntypedFormGroup({
      numberOfPlayers: this.numberOfPlayersControl,
      numberOfRounds: this.numberOfRoundsControl,
      title: this.titleControl,
      shouldSortByRank: this.shouldSortByPlayerControl,
      showLastRound: this.showLastRoundControl,
      usePlayer: this.usePlayerControl,
      applyNextRound: this.applyNextRoundControl,
      bonusRound: this.bonusRoundControl
    });

    this.applySettingsValuesToFormControls();
  }

  ngOnDestroy(): void {
    this.settingsService.ngOnDestroy();
  }

  resetEverything(): void {
    const dialogRef =  this.openDialog(RESET_EVERYTHING_MESSAGE);
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(shouldReset => {
        if (shouldReset) {
          this.settingsService.resetEverything();
          this.applySettingsValuesToFormControls();
          this.alertService.success(RESET_EVERYTHING_SUCCESS_MESSAGE, Date.now());
        } else {
          this.alertService.warn(ACTION_CANCELLED_MESSAGE, Date.now());
        }
      });
    }
  }

  applyToSettings(): void {
    const dialogRef =  this.openDialog(APPLY_SETTING_MESSAGE);
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(shouldApply => {
        if (shouldApply) {
          this.settingsService.applySettings(
            this.numberOfRoundsControl.value,
            this.numberOfPlayersControl.value,
            this.titleControl.value,
            this.usePlayerControl.value,
            this.shouldSortByPlayerControl.value,
            this.showLastRoundControl.value,
            this.applyNextRoundControl.value,
            this.bonusRoundControl.value
          );
          this.alertService.success(APPLY_SETTING_SUCCESS_MESSAGE, Date.now());
        } else {
          this.alertService.warn(ACTION_CANCELLED_MESSAGE, Date.now());
        }
      });
    }
  }

  resetOnlyScores(): void {
    const dialogRef = this.openDialog(RESET_SCORES_MESSAGE);
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(shouldReset => {
        if (shouldReset) {
          this.settingsService.resetScores(true);
          this.alertService.success(RESET_SCORES_SUCCESS_MESSAGE, Date.now());
        } else {
          this.alertService.warn(ACTION_CANCELLED_MESSAGE, Date.now());
        }
      });
    }
  }

  private openDialog(message: string): MatDialogRef<ConfirmationPopupComponent> {
    return this.dialog.open(ConfirmationPopupComponent, {
      data: {
        label: message
      },
      id: 'confirmation-modal',
      width: window.innerWidth <= 768 ? '90vw' : '35vw'
    });
  }

  applySettingsValuesToFormControls(): void {
    this.numberOfPlayersControl.setValue(this.settingsService.numberOfPlayers);
    this.numberOfRoundsControl.setValue(this.settingsService.numberOfRounds);

    this.shouldSortByPlayerControl.setValue(this.settingsService.shouldSortByPlayer);
    this.showLastRoundControl.setValue(this.settingsService.showLastRoundScores);
    this.usePlayerControl.setValue(this.settingsService.usePlayer);
    this.bonusRoundControl.setValue(this.settingsService.hasBonusRound);
    this.applyNextRoundControl.setValue(this.settingsService.applyScoresNextRound);

    this.titleControl.setValue(this.settingsService.title);

    this.colorControl.setValue(this.settingsService.color);
  }

  setColor(): void {
    this.settingsService.setColor(this.colorControl.value);
  }

  getBackgroundColor(value: string): string {
    return 'var(' + value + 40 + ')';
  }
}
