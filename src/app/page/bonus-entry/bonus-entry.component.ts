import {Component, OnDestroy, OnInit} from '@angular/core';
import {SettingsService} from '../../service/settings.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../service/alert.service';

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
      <div *ngIf="isFormGroupLoaded" data-score-entry-ctn class="score-entry-ctn">
        <div *ngFor="let i of players" data-for-each-player>
          <div data-player-label>{{this.settingsService.getPlayerName(i)}}</div>
          <mat-form-field class="player-score-form-field">
            <input matInput data-score-entry-input
                   type="number"
                   rows="1"
                   [formControl]="formGroup.get(i.toString())"
            >
            <mat-error data-basic-error *ngIf="!formGroup.get(i.toString()).valid">
              Enter {{this.settingsService.usePlayer ? this.settingsService.PLAYER : this.settingsService.TEAM}}'s score
            </mat-error>
          </mat-form-field>
        </div>
      </div>
      <div class="button-div">
        <button data-button-apply-2
                (click)="recordScores()"
                [disabled]="!this.formGroup.valid"
                class="apply-button">Apply
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./bonus-entry.component.scss']
})
export class BonusEntryComponent implements OnInit, OnDestroy {
  formGroup: FormGroup = new FormGroup({});
  isFormGroupLoaded: boolean = false;
  players: number[] = [];

  constructor(private alertService: AlertService,
              public settingsService: SettingsService) {
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
    this.loadScoresByRound();
  }

  makeFormControls(): void {
    let i: number = 0;
    for (i; i < this.settingsService.numberOfPlayers; i++) {
      this.players.push(i);
      let formControl: FormControl = new FormControl('', [Validators.required, Validators.max(1000)]);
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
