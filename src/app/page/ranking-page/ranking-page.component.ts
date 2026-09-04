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
        <div data-overall-score-ctn class="score-ctn" aria-live="polite" aria-atomic="false">
          <div data-overall-score-label class="score-title">Overall Score</div>
          <div class="player-score-ctn" [style.--cols]="columnCount(overallScores)"
            role="table" [attr.aria-label]="(title || 'Scorekeeping') + ' — Overall Score'">
            <div role="row" class="sr-only">
              <span role="columnheader">Player</span>
              <span role="columnheader">Total score</span>
            </div>
            @for (sc of overallScores; track sc) {
              <div class="player-score-value" role="row">
                <div data-overall-value-name class="player-label" role="rowheader">{{sc.player}}</div>&nbsp;
                <div data-overall-value-score role="cell">{{sc.totalScore}}</div>
              </div>
            }
          </div>
        </div>

        @if (settingsService.showLastRoundScores) {
          <div data-last-round-score-ctn class="score-ctn">
            <div data-last-round-score-label class="score-title">Last Round ({{this.lastRoundNumber + 1}}) Scores</div>
            <div class="player-score-ctn" [style.--cols]="columnCount(lastRoundScores)"
              role="table" [attr.aria-label]="'Round ' + (this.lastRoundNumber + 1) + ' scores'">
              <div role="row" class="sr-only">
                <span role="columnheader">Player</span>
                <span role="columnheader">Round score</span>
              </div>
              @for (sc of lastRoundScores; track sc) {
                <div class="player-score-value" role="row">
                  <div data-last-round-value-name class="player-label" role="rowheader">{{sc.player}}</div>&nbsp;
                  <div data-last-round-value-score role="cell">{{sc.totalScore}}</div>
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

  // Roughly how many rows stand in one screen-height column. The stylesheet
  // caps the board at this many columns, so a small roster shows as one narrow
  // column instead of stretching across the width a full roster needed.
  private readonly ROWS_PER_COLUMN: number = 20;

  columnCount(scores: PlayerScoreModel[]): number {
    return Math.max(1, Math.ceil((scores?.length ?? 0) / this.ROWS_PER_COLUMN));
  }

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
