import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
            @for (sc of overallScores; track sc) {
              <div class="player-score-value">
                <div data-overall-value-name class="player-label">{{sc.player}}</div>&nbsp;
                <div data-overall-value-score>{{sc.totalScore}}</div>
              </div>
            }
          </div>
        </div>
    
        @if (settingsService.showLastRoundScores) {
          <div data-last-round-score-ctn class="score-ctn">
            <div data-last-round-score-label class="score-title">Last Round ({{this.lastRoundNumber + 1}}) Scores</div>
            <div class="player-score-ctn">
              @for (sc of lastRoundScores; track sc) {
                <div class="player-score-value">
                  <div data-last-round-value-name class="player-label">{{sc.player}}</div>&nbsp;
                  <div data-last-round-value-score>{{sc.totalScore}}</div>
                </div>
              }
            </div>
          </div>
        }
      </div>
    
    </div>
    `,
    styleUrls: ['./ranking-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
})
export class RankingPageComponent implements OnInit, OnDestroy {
  settingsService = inject(SettingsService);

  overallScores: PlayerScoreModel[];
  lastRoundScores: PlayerScoreModel[];

  lastRoundNumber: number = 1;
  title: string = '';

  ngOnInit() {
    this.getSubscriptionsStarted();
    this.settingsService.readLocalStorage();

    window.setInterval(() => {
      this.settingsService.readLocalStorage();
    }, 20000);
    // 20000 = 20 seconds

    const queryParams = new URLSearchParams(window.location.search);
    const pageParam = queryParams.get('page');

    if (pageParam) {
      this.settingsService.showPageWithUrlParam(pageParam);
    }
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
