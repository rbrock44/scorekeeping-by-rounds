import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import {SettingsService} from '../../service/settings.service';
import { UntypedFormControl, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AlertService} from '../../service/alert.service';

import { MatFormField, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-bonus-entry',
    template: `
    <div>
      <div class="header-div">
        <header data-header-title id="score-title">Bonus Entry</header>
      </div>
      <div class="button-div">
        <button data-button-apply
          (click)="recordScores()"
          [disabled]="!this.formGroup.valid"
          class="apply-button">Apply
        </button>
      </div>
      @if (isFormGroupLoaded) {
        <div data-score-entry-ctn class="score-entry-ctn">
          @for (i of players; track i) {
            <div data-for-each-player>
              <div data-player-label>{{this.settingsService.getPlayerName(i)}}</div>
              <mat-form-field class="player-score-form-field">
                <input matInput data-score-entry-input
                  type="number"
                  rows="1"
                  [formControl]="formGroup.get(i.toString())"
                  >
                @if (!formGroup.get(i.toString()).valid) {
                  <mat-error data-basic-error>
                    Enter {{this.settingsService.usePlayer ? this.settingsService.PLAYER : this.settingsService.TEAM}}'s score
                  </mat-error>
                }
              </mat-form-field>
            </div>
          }
        </div>
      }
      <div class="button-div">
        <button data-button-apply-2
          (click)="recordScores()"
          [disabled]="!this.formGroup.valid"
          class="apply-button">Apply
        </button>
      </div>
    </div>
    `,
    styleUrls: ['./bonus-entry.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatFormField, MatInput, FormsModule, ReactiveFormsModule, MatError]
})
export class BonusEntryComponent implements OnInit, OnDestroy {
  private alertService = inject(AlertService);
  settingsService = inject(SettingsService);

  formGroup: UntypedFormGroup = new UntypedFormGroup({});
  isFormGroupLoaded: boolean = false;
  players: number[] = [];

  ngOnInit(): void {
    this.settingsService.settingsReset.subscribe(scores => {
      this.setupPage();
    });

    this.setupPage();
  }

  ngOnDestroy(): void {
    this.settingsService.ngOnDestroy();
  }

  setupPage(): void {
    this.makeFormControls();
    this.loadScoresByRound();
  }

  makeFormControls(): void {
    let i: number = 0;
    for (i; i < this.settingsService.numberOfPlayers; i++) {
      this.players.push(i);
      let formControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.max(1000)]);
      this.formGroup.addControl(i.toString(), formControl);
    }

    this.isFormGroupLoaded = true;
  }

  loadScoresByRound(): void {
    let i: number = 0;
    for (i; i < this.settingsService.numberOfPlayers; i++) {
      this.formGroup.get(i.toString()).setValue(this.settingsService.scores[i].bonus);
    }
  }

  recordScores(): void {
    let scores: number[] = [this.settingsService.numberOfPlayers];

    let i: number = 0;
    for (i; i < this.settingsService.numberOfPlayers; i++) {
      scores[i] = this.formGroup.get(i.toString()).value;
    }

    this.settingsService.updateBonus(scores);

    this.alertService.success(this.getRoundSavedMessage(), Date.now());
  }

  getRoundSavedMessage(): string {
    return 'Bonus Round saved successfully.';
  }
}
