import {Component, OnDestroy, OnInit} from '@angular/core';
import {SettingsService} from '../../service/settings.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
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

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  colors = COLOR_OPTIONS;

  numberOfRoundsControl: FormControl = new FormControl('', [
    Validators.min(1),
    Validators.max(1000),
    Validators.pattern('^[0-9.]*$'),
    Validators.required
  ]);
  numberOfPlayersControl: FormControl = new FormControl('', [
    Validators.min(1),
    Validators.max(1000),
    Validators.pattern('^[0-9.]*$'),
    Validators.required
  ]);

  titleControl: FormControl = new FormControl('', [Validators.required]);
  shouldSortByPlayerControl: FormControl = new FormControl('', [Validators.required]);
  showLastRoundControl: FormControl = new FormControl('', [Validators.required]);
  usePlayerControl: FormControl = new FormControl('', [Validators.required]);
  bonusRoundControl: FormControl = new FormControl('', [Validators.required]);
  applyNextRoundControl: FormControl = new FormControl('', [Validators.required]);
  colorControl: FormControl = new FormControl('', [Validators.required]);

  settingsFormGroup: FormGroup;

  constructor(public dialog: MatDialog,
              private alertService: AlertService,
              public settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsFormGroup = new FormGroup({
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
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      data: {
        label: RESET_EVERYTHING_MESSAGE
      },
      id: 'confirmation-modal',
      width: '35vw'
    });
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
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      data: {
        label: APPLY_SETTING_MESSAGE
      },
      id: 'confirmation-modal',
      width: '35vw'
    });
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
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      data: {
        label: RESET_SCORES_MESSAGE
      },
      id: 'confirmation-modal',
      width: '35vw'
    });
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
