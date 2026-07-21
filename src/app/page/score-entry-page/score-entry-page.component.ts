import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import {SettingsService} from '../../service/settings.service';
import { UntypedFormControl, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AlertService} from '../../service/alert.service';

import { MatFormField, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-score-entry-page',
    template: `
    <div>
      <div class="header-div">
        <header data-header-title id="score-title">Score Entry</header>
        <header data-round-number id="round-title"> Round #{{this.roundNumber + 1}}</header>
      </div>
      <div class="button-div">
        <div data-round-pagination-buttons>
          <button data-button-previous-round (click)="previousRound()" [disabled]="roundNumber === 0" class="pagination-button"><</button>
          <button data-button-next-round
            (click)="nextRound()"
            [disabled]="roundNumber === this.settingsService.numberOfRounds - 1"
            class="pagination-button">>
          </button>
        </div>
        <div>
          <button data-button-apply
            (click)="recordScores()"
            [disabled]="!this.scoreEntryFormGroup.valid"
            class="apply-button">Apply
          </button>
        </div>
      </div>
      @if (isFormGroupLoaded) {
        <div data-score-entry-ctn class="score-entry-ctn" [style.--cols]="columnCount">
          @for (i of players; track i) {
            <div data-for-each-player>
              <div data-player-label>{{this.settingsService.getPlayerName(i)}}</div>
              <mat-form-field class="player-score-form-field"
                appearance="outline"
                subscriptSizing="dynamic">
                <input matInput data-score-entry-input
                  type="number"
                  inputmode="numeric"
                  [formControl]="scoreEntryFormGroup.get(i.toString())"
                  >
                @if (!scoreEntryFormGroup.get(i.toString()).valid) {
                  <mat-error data-basic-error>Required</mat-error>
                }
              </mat-form-field>
            </div>
          }
        </div>
      }
      <div class="button-div">
        <div>
          <button data-button-apply-2
            (click)="recordScores()"
            [disabled]="!this.scoreEntryFormGroup.valid"
            class="apply-button">Apply
          </button>
        </div>
        <div data-round-pagination-buttons-2>
          <button data-button-previous-round-2 (click)="previousRound()" [disabled]="roundNumber === 0" class="pagination-button"><</button>
          <button data-button-next-round-2
            (click)="nextRound()"
            [disabled]="roundNumber === this.settingsService.numberOfRounds - 1"
            class="pagination-button">>
          </button>
        </div>
      </div>
    </div>
    `,
    styleUrls: ['./score-entry-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatFormField, MatInput, FormsModule, ReactiveFormsModule, MatError]
})
export class ScoreEntryPageComponent implements OnInit, OnDestroy {
  private alertService = inject(AlertService);
  settingsService = inject(SettingsService);

  roundNumber: number;
  scoreEntryFormGroup: UntypedFormGroup = new UntypedFormGroup({});
  isFormGroupLoaded: boolean = false;
  players: number[] = [];

  // Roughly how many rows stand in one screen-height column. The stylesheet
  // caps the card at this many columns so a small roster shrinks to one narrow
  // column instead of stretching across the width a full roster needed.
  private readonly ROWS_PER_COLUMN: number = 12;

  get columnCount(): number {
    return Math.max(1, Math.ceil(this.players.length / this.ROWS_PER_COLUMN));
  }

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
    this.roundNumber = this.settingsService.figureOutLastRoundEnteredNotAboveNumberOfRounds();
    this.loadScoresByRound();
  }

  makeFormControls(): void {
    let i: number = 0;
    for (i; i < this.settingsService.numberOfPlayers; i++) {
      this.players.push(i);
      let formControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.max(1000)]);
      this.scoreEntryFormGroup.addControl(i.toString(), formControl);
    }

    this.isFormGroupLoaded = true;
  }

  previousRound(): void {
    this.roundNumber -= 1;

    this.loadScoresByRound();
  }

  nextRound(): void {
    this.roundNumber += 1;

    this.loadScoresByRound();
  }

  loadScoresByRound(): void {
    let i: number = 0;
    for (i; i < this.settingsService.numberOfPlayers; i++) {
      this.scoreEntryFormGroup.get(i.toString()).setValue(this.settingsService.scores[i].score[this.roundNumber]);
    }
  }

  recordScores(): void {
    let scores: number[] = [this.settingsService.numberOfPlayers];

    let i: number = 0;
    for (i; i < this.settingsService.numberOfPlayers; i++) {
      scores[i] = this.scoreEntryFormGroup.get(i.toString()).value;
    }

    this.settingsService.updateScores(this.roundNumber, scores);

    if (this.settingsService.applyScoresNextRound) {
      this.nextRound();
    }

    this.alertService.success(this.getRoundSavedMessage(), Date.now());
  }

  getRoundSavedMessage(): string {
    return 'Round ' + (this.roundNumber) + ' saved successfully.';
  }
}
