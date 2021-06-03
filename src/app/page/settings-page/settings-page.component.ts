import {Component, OnDestroy, OnInit} from '@angular/core';
import {SettingsService} from '../../service/settings.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ConfirmationPopupComponent} from '../../component/confirmation-popup/confirmation-popup.component';
import {AlertService} from '../../service/alert.service';

@Component({
  selector: 'app-settings-page',
  template: `
    <div>
      <div class="header-div">
        <header data-header-title>Settings</header>
      </div>

      <div data-settings-input>
        <!-- TITLE  -->
        <div class="settings-value-ctn">
          <div data-title-label class="settings-value-label">Title</div>
          <mat-form-field class="settings-value-form-field">
            <input matInput data-title
                   type="text"
                   rows="1"
                   [formControl]="titleControl"
            >
            <mat-error data-basic-error *ngIf="!titleControl.valid">
              Title is required
            </mat-error>
          </mat-form-field>
        </div>
        <!-- NUMBER OF ROUNDS  -->
        <div class="settings-value-ctn">
          <div data-number-of-rounds-input-label class="settings-value-label">Number Of Rounds</div>
          <mat-form-field class="settings-value-form-field">
            <input matInput data-number-of-rounds-input
                   type="number"
                   rows="1"
                   [formControl]="numberOfRoundsControl"
            >
            <mat-error data-basic-error *ngIf="!numberOfRoundsControl.hasError('required')">
              Number of {{this.settingsService.PLAYERS}} is required
            </mat-error>
            <mat-error data-max-error *ngIf="!numberOfRoundsControl.hasError('max')">
              Number of {{this.settingsService.PLAYERS}} cannot exceed 1000
            </mat-error>
          </mat-form-field>
        </div>
        <!-- NUMBER OF PLAYERS  -->
        <div class="settings-value-ctn">
          <div data-number-of-players-input-label class="settings-value-label">
            Number Of {{this.settingsService.usePlayer ? this.settingsService.PLAYERS : this.settingsService.TEAMS}}
          </div>
          <mat-form-field class="settings-value-form-field">
            <input matInput data-number-of-players-input
                   type="number"
                   rows="1"
                   [formControl]="numberOfPlayersControl"
            >
            <mat-error data-basic-error *ngIf="!numberOfPlayersControl.hasError('required')">
              Number of {{this.settingsService.PLAYERS}} is required
            </mat-error>
            <mat-error data-max-error *ngIf="!numberOfPlayersControl.hasError('max')">
              Number of {{this.settingsService.PLAYERS}} cannot exceed 1000
            </mat-error>
          </mat-form-field>
        </div>
        <!-- USE PLAYER?  -->
        <app-yes-no-dropdown [control]="usePlayerControl"
                             [htmlId]="'use player select'"
                             [yesOption]="this.settingsService.PLAYERS"
                             [noOption]="this.settingsService.TEAMS"
                             [name]="'Use Players or Teams'"
        ></app-yes-no-dropdown>
        <!-- SHOULD SORT BY RANK?  -->
        <app-yes-no-dropdown [control]="shouldSortByPlayerControl"
                             [htmlId]="'sort-by-player-select'"
                             [name]="'Should Sort By'"
                             [yesOption]="this.settingsService.usePlayer ? 'Player #' : 'Team #'"
                             [noOption]="'Rank #'"
        ></app-yes-no-dropdown>
        <!-- SHOW LAST ROUND SCORES?  -->
        <app-yes-no-dropdown [control]="showLastRoundControl"
                             [htmlId]="'show-last-round-select'"
                             [name]="'Show Last Round Scores'"
        ></app-yes-no-dropdown>
        <!-- APPLY SCORES GO TOES NEXT ROUND?  -->
        <app-yes-no-dropdown [control]="applyNextRoundControl"
                             [htmlId]="'apply-scores-next-round-select'"
                             [name]="'Apply Scores Goes To Next Round'"
        ></app-yes-no-dropdown>
        <!-- COLOR  -->
        <div class="dropdown-ctn">
          <div data-dropdown-label class="dropdown__label">
            Color - *Applies Immediately
          </div>
          <div class="dropdown__data">
            <mat-form-field class="dropdown-form-field">
              <mat-label>Select Value</mat-label>
              <mat-select [formControl]="colorControl" (selectionChange)="setColor()"
                          [ngStyle]="{'background-color': getBackgroundColor(this.colorControl.value)}">
                <mat-option *ngFor="let color of this.colors" data-dropdown-option [value]="color.value"
                            [ngStyle]="{'background-color': getBackgroundColor(color.value)}"
                >
                  {{color.name}}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </div>
      </div>

      <div class="buttons">
        <button data-button-apply
                (click)="applyToSettings()"
                [disabled]="!this.settingsFormGroup.valid"
                class="apply-button">Apply
        </button>
        <div>
          <button data-button-reset-only-scores
                  (click)="resetOnlyScores()"
                  class="reset-button">Reset Only Scores
          </button>
          <button data-button-reset-everything
                  (click)="resetEverything()"
                  class="reset-button">Reset Everything
          </button>
        </div>
        <button data-button-export (click)="this.settingsService.exportScoresToExcel()">
          Export Scores
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit, OnDestroy {
  colors = [
    {
      name: 'Black',
      value: '--black-color-'
    },
    {
      name: 'Blue',
      value: '--blue-color-'
    },
    {
      name: 'Gray',
      value: '--gray-color-'
    },
    {
      name: 'Gray Dark',
      value: '--gray-dark-color-'
    },
    {
      name: 'Green',
      value: '--green-color-'
    },
    {
      name: 'Orange',
      value: '--orange-color-'
    },
    {
      name: 'Pink',
      value: '--pink-color-'
    },
    {
      name: 'Purple',
      value: '--purple-color-'
    },
    {
      name: 'Red',
      value: '--red-color-'
    },
    {
      name: 'Yellow',
      value: '--yellow-color-'
    },
    {
      name: 'White',
      value: '--white-color-'
    }
  ];

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
  applyNextRoundControl: FormControl = new FormControl('', [Validators.required]);
  colorControl: FormControl = new FormControl('', [Validators.required]);

  settingsFormGroup: FormGroup;

  RESET_EVERYTHING_MESSAGE: string = 'This will reset everything to the default settings.';
  RESET_SCORES_MESSAGE: string = 'This will reset the scores only.';
  APPLY_SETTING_MESSAGE: string = 'Applying settings changes will reset scores.';
  RESET_SCORES_SUCCESS_MESSAGE: string = 'Scores reset successfully.';
  RESET_EVERYTHING_SUCCESS_MESSAGE: string = 'Settings and scores reset successfully.';
  APPLY_SETTING_SUCCESS_MESSAGE: string = 'Settings applied successfully.';
  ACTION_CANCELLED_MESSAGE: string = 'Action Cancelled.';

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
      applyNextRound: this.applyNextRoundControl
    });

    this.applySettingsValuesToFormControls();
  }

  ngOnDestroy(): void {
    this.settingsService.ngOnDestroy();
  }

  resetEverything(): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      data: {
        label: this.RESET_EVERYTHING_MESSAGE
      },
      id: 'confirmation-modal',
      width: '35vw'
    });
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(shouldReset => {
        if (shouldReset) {
          this.settingsService.resetEverything();
          this.applySettingsValuesToFormControls();
          this.alertService.success(this.RESET_EVERYTHING_SUCCESS_MESSAGE, Date.now());
        } else {
          this.alertService.warn(this.ACTION_CANCELLED_MESSAGE, Date.now());
        }
      });
    }
  }

  applyToSettings(): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      data: {
        label: this.APPLY_SETTING_MESSAGE
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
            this.applyNextRoundControl.value
          );
          this.alertService.success(this.APPLY_SETTING_SUCCESS_MESSAGE, Date.now());
        } else {
          this.alertService.warn(this.ACTION_CANCELLED_MESSAGE, Date.now());
        }
      });
    }
  }

  resetOnlyScores(): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      data: {
        label: this.RESET_SCORES_MESSAGE
      },
      id: 'confirmation-modal',
      width: '35vw'
    });
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(shouldReset => {
        if (shouldReset) {
          this.settingsService.resetScores(true);
          this.alertService.success(this.RESET_SCORES_SUCCESS_MESSAGE, Date.now());
        } else {
          this.alertService.warn(this.ACTION_CANCELLED_MESSAGE, Date.now());
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
