import {Component, OnDestroy, OnInit} from '@angular/core';
import {SettingsService} from '../../service/settings.service';
import {PlayerScoreModel} from '../../model/player-score.model';

@Component({
  selector: 'app-ranking-page',
  template: `
    <div>
      <div class="header-div">
        <header data-header-title>{{this.title}}</header>
      </div>

      <div data-score-div class="score-div-ctn">
        <div data-overall-score-ctn class="score-ctn">
          <div data-overall-score-label class="score-title">Overall Score</div>
          <div class="player-score-ctn">
            <div *ngFor="let sc of overallScores" class="player-score-value">
              <div data-overall-value-name class="player-label">{{sc.player}}</div>&nbsp;
              <div data-overall-value-score>{{sc.totalScore}}</div>
            </div>
          </div>
        </div>

        <div *ngIf="settingsService.showLastRoundScores" data-last-round-score-ctn class="score-ctn">
          <div data-last-round-score-label class="score-title">Last Round ({{this.lastRoundNumber + 1}}) Scores</div>
          <div class="player-score-ctn">
            <div *ngFor="let sc of lastRoundScores" class="player-score-value">
              <div data-last-round-value-name class="player-label">{{sc.player}}</div>&nbsp;
              <div data-last-round-value-score>{{sc.totalScore}}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./ranking-page.component.scss']
})
export class RankingPageComponent implements OnInit, OnDestroy {
  overallScores: PlayerScoreModel[];
  lastRoundScores: PlayerScoreModel[];

  lastRoundNumber: number = 1;
  title: string = '';

  constructor(public settingsService: SettingsService) {
  }

  ngOnInit() {
    this.getSubscriptionsStarted();
    this.settingsService.readLocalStorage();

    window.setInterval(() => {
      this.settingsService.readLocalStorage();
    }, 20000);
    // 20000 = 20 seconds
  }

  ngOnDestroy(): void {
    this.settingsService.ngOnDestroy();
  }

  getData(): void {
    this.title = this.settingsService.makeRankingTitle();
    this.settingsService.kickOffInitialScoreAndTotal();
  }

  getSubscriptionsStarted(): void {
    this.settingsService.scoresChange.subscribe(scores => {
      this.overallScores = scores;
    });

    this.settingsService.lastRoundChange.subscribe(scores => {
      this.lastRoundScores = scores;
      this.lastRoundNumber = this.settingsService.lastRoundNumber;
    });

    this.settingsService.settingsReset.subscribe(scores => {
      this.settingsService.kickOffInitialScoreAndTotal();
      this.getData();
    });

    this.getData();
  }
}
