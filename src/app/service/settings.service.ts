import {Injectable, OnDestroy} from '@angular/core';
import * as _ from 'lodash';
import {Observable, Subject} from 'rxjs';
import {PlayerModel} from '../model/player.model';
import {PlayerScoreModel} from '../model/player-score.model';
import {ExcelService} from './excel.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService implements OnDestroy {
  // tslint:disable-next-line:variable-name
  private _scoresUpdatedSubject: Subject<PlayerScoreModel[]> = new Subject<PlayerScoreModel[]>();
  // tslint:disable-next-line:variable-name
  private _lastRoundUpdatedSubject: Subject<PlayerScoreModel[]> = new Subject<PlayerScoreModel[]>();
  // tslint:disable-next-line:variable-name
  private _settingsResetSubject: Subject<boolean> = new Subject<boolean>();

  title: string;
  shouldSortByPlayer: boolean;
  usePlayer: boolean;
  showLastRoundScores: boolean;
  applyScoresNextRound: boolean;
  numberOfRounds: number;
  numberOfPlayers: number;
  lastRoundNumber: number;
  scores: PlayerModel[];
  totals: number[];
  color: string;

  TEAM: string = 'Team';
  PLAYER: string = 'Player';
  TEAMS: string = 'Teams';
  PLAYERS: string = 'Players';
  NUMBER_OF_PLAYERS_DEFAULT = '10';
  NUMBER_OF_ROUNDS_DEFAULT = '10';
  TITLE_DEFAULT = 'Trivia';
  USE_PLAYER_DEFAULT = 'true';
  SORT_BY_PLAYER_DEFAULT = 'true';
  SHOW_LAST_ROUND_DEFAULT = 'true';
  APPLY_SCORES_NEXT_ROUND_DEFAULT = 'true';
  LAST_ROUND_DEFAULT = '0';
  COLOR_DEFAULT = '--blue-color-';

  constructor(private excelService: ExcelService) {
    this.readFromLocalStorage();
    this.resetScores(false);
  }

  ngOnDestroy(): void {
    this.saveToLocalStorage();
  }

  get scoresChange(): Observable<PlayerScoreModel[]> {
    return this._scoresUpdatedSubject;
  }

  get lastRoundChange(): Observable<PlayerScoreModel[]> {
    return this._lastRoundUpdatedSubject;
  }

  get settingsReset(): Observable<boolean> {
    return this._settingsResetSubject;
  }

  setColor(value: string): void {
    this.color = value;
    this.saveColorToLocalStorage();
    const root = document.documentElement;
    let buttonValue: string = value + 40;
    let backgroundValue: string = value + 80;
    root.style.setProperty('--buttonColor', `var(${buttonValue})`);
    root.style.setProperty('--backgroundColor', `var(${backgroundValue})`);
  }

  applySettings(
    rounds: number,
    players: number,
    title: string,
    usePlayer: boolean,
    sortByRank: boolean,
    showLastRound: boolean,
    applyScoresNextRound: boolean
  ) {
    this.numberOfRounds = rounds;

    this.numberOfPlayers = players;
    this.usePlayer = usePlayer;
    this.title = title;

    this.shouldSortByPlayer = sortByRank;
    this.showLastRoundScores = showLastRound;
    this.applyScoresNextRound = applyScoresNextRound;
    this.resetScores(true);

    this.saveToLocalStorage();
  }

  //#region Reset Methods
  resetEverything(): void {
    window.localStorage.clear();

    this.numberOfRounds = +_.cloneDeep(this.NUMBER_OF_ROUNDS_DEFAULT);
    this.numberOfPlayers = +_.cloneDeep(this.NUMBER_OF_PLAYERS_DEFAULT);
    this.lastRoundNumber = +_.cloneDeep(this.LAST_ROUND_DEFAULT);

    this.usePlayer = _.cloneDeep(this.getBoolean(this.USE_PLAYER_DEFAULT));
    this.shouldSortByPlayer = _.cloneDeep(this.getBoolean(this.SORT_BY_PLAYER_DEFAULT));
    this.showLastRoundScores = _.cloneDeep(this.getBoolean(this.SHOW_LAST_ROUND_DEFAULT));
    this.applyScoresNextRound = _.cloneDeep(this.getBoolean(this.APPLY_SCORES_NEXT_ROUND_DEFAULT));

    this.title = _.cloneDeep(this.TITLE_DEFAULT);
    this.setColor(_.cloneDeep(this.COLOR_DEFAULT));

    this.resetScores(true);
    this.saveToLocalStorage();

    this._settingsResetSubject.next(true);
  }

  resetScores(useDefault: boolean): void {
    this.reloadScoresAndTotal(useDefault);

    this._settingsResetSubject.next(true);
  }

  reloadScoresAndTotal(useDefault: boolean): void {
    this.scores = this.getScoresOrDefault(useDefault);
    this.totals = this.getTotalsOrDefault(useDefault);
  }

  //#endregion

  //#region String Concatenation Methods
  public getPlayerName(num: number): string {
    const name: string = this.usePlayer ? 'Player ' : 'Team ';
    return name + (num + 1);
  }

  private makeTotalLocalStorageKey(playerNumber: number): string {
    return 'total-player' + playerNumber.toString();
  }

  private makeScoreLocalStorageKey(playerNumber: number, roundNumber: number): string {
    return 'score-player' + playerNumber.toString() + '-round' + roundNumber.toString();
  }

  public makeRankingTitle(): string {
    return this.title + ' Rankings';
  }

  //#endregion

  //#region Score Related Methods
  public updateScores(roundIndex: number, roundScores: number[]): void {
    let x: number = 0;
    for (x; x < this.numberOfPlayers; x++) {
      this.scores[x].score[roundIndex] = roundScores[x];
    }

    this.saveScoresToLocalStorage();
    this.updateTotals();
    this.scoreChanged();
    this.lastRoundChanged(roundIndex);
  }

  public kickOffInitialScoreAndTotal(): void {
    this.updateTotals();
    this.scoreChanged();
    this.lastRoundChanged(this.lastRoundNumber - 1);
  }

  private lastRoundChanged(roundNumber: number): void {
    this.lastRoundNumber = roundNumber;

    let scores: PlayerScoreModel[] = [];
    let i: number = 0;
    for (i; i < this.numberOfPlayers; i++) {
      const playerScore: PlayerScoreModel = {
        player: this.getPlayerName(i),
        totalScore: this.scores[i].score[roundNumber]
      };

      scores.push(playerScore);
    }

    if (!this.shouldSortByPlayer) {
      scores.sort((a, b) => {
        if (!a.totalScore || a.totalScore < b.totalScore) {
          return -1;
        } else if (!b.totalScore || a.totalScore > b.totalScore) {
          return 1;
        }
        return 0;
      });
    }

    if (!this.shouldSortByPlayer) {
      scores = scores.sort((a, b) => b.totalScore - a.totalScore);
    }

    this._lastRoundUpdatedSubject.next(scores);
  }

  private figureOutLastCompleteRoundEntered(): number {
    let i: number = 0;
    let x: number;
    let total: number;
    for (i; i < this.numberOfRounds; i++) {
      x = 0;
      total = 0;
      for (x; x < this.numberOfPlayers; x++) {
        total += this.getScoreFromEntry(this.scores[x].score[i].toString());
      }

      if (total === 0) {
        return i - 1;
      }
    }

    return _.cloneDeep(this.numberOfRounds);
  }

  public figureOutLastRoundEnteredNotAboveNumberOfRounds(): number {
    let round: number = this.figureOutLastCompleteRoundEntered();
    return round >= this.numberOfRounds - 1 ? this.numberOfRounds - 1 : round + 1;
  }

  private getScoreFromEntry(num: string): number {
    if (isNaN(+num) || num === undefined || num === null) {
      return 0;
    } else {
      return +num;
    }
  }

  private scoreChanged(): void {
    let scores: PlayerScoreModel[] = [];
    let i: number = 0;
    for (i; i < this.numberOfPlayers; i++) {
      const playerScore: PlayerScoreModel = {
        player: this.getPlayerName(i),
        totalScore: this.totals[i]
      };

      scores.push(playerScore);
    }

    if (!this.shouldSortByPlayer) {
      scores = scores.sort((a, b) => b.totalScore - a.totalScore);
    }

    this._scoresUpdatedSubject.next(scores);
  }

  private updateTotals(): void {
    this.totals = [this.numberOfPlayers];

    let i: number = 0;
    let x: number;
    let total: number;
    for (i; i < this.numberOfPlayers; i++) {
      x = 0;
      total = 0;
      for (x; x < this.numberOfRounds; x++) {
        total += this.scores[i].score[x];
      }

      this.totals[i] = total;
    }

    this.saveTotalsToLocalStorage();
  }

  public exportScoresToExcel(): void {
    const name: string = 'Name';
    const total: string = 'Total';
    const round: string = 'Round ';
    let dataArray: any = [];

    let i: number = 0;
    for (i; i < this.numberOfPlayers; i++) {
      let data: any = {};
      let x: number = 0;
      data[name] = this.getPlayerName(i);
      data[total] = this.totals[i];

      for (x; x < this.scores[i].score.length; x++) {
        data[round + (x + 1)] = this.scores[i].score[x];
      }

      dataArray.push(data);
    }

    this.excelService.exportAsExcelFile(dataArray, this.makeRankingTitle());

    // This helped
    // https://medium.com/@madhavmahesh/exporting-an-excel-file-in-angular-927756ac9857
  }

  //#endregion

  //#region Get From Local Storage
  public readLocalStorage(): void {
    this.readFromLocalStorage();
    this.scores = this.getScoresOrDefault(false);
    this.totals = this.getTotalsOrDefault(false);
    if (this.lastRoundNumber < this.figureOutLastRoundEnteredNotAboveNumberOfRounds()) {
      this.lastRoundNumber = this.figureOutLastRoundEnteredNotAboveNumberOfRounds();
    }
    this.kickOffInitialScoreAndTotal();
  }

  private readFromLocalStorage(): void {
    this.numberOfPlayers = +this.getNumberOfPlayersOrDefault();
    this.numberOfRounds = +this.getNumberOfRoundsOrDefault();
    this.lastRoundNumber = +this.getLastRoundOrDefault();

    this.title = this.getTitleOrDefault();

    this.shouldSortByPlayer = this.getBoolean(this.getSortByPlayerOrDefault());
    this.showLastRoundScores = this.getBoolean(this.getShowLastRoundOrDefault());
    this.usePlayer = this.getBoolean(this.getUsePlayerOrDefault());
    this.applyScoresNextRound = this.getBoolean(this.getApplyScoresNextRoundOrDefault());

    this.setColor(this.getColorOrDefault());
  }

  private getBoolean(value): boolean {
    switch (value) {
      case true:
      case 'true':
      case 1:
      case '1':
      case 'on':
      case 'yes':
        return true;
      default:
        return false;
    }
  }

  private isNullOrUndefined(str: string): boolean {
    if (str == null || str === undefined || str === 'undefined' || str === 'null') {
      return true;
    } else {
      return false;
    }
  }

  private getScoresOrDefault(useDefault: boolean): PlayerModel[] {
    let score: PlayerModel[] = [];

    let i: number = 0;
    let x: number;
    for (i; i < this.numberOfPlayers; i++) {
      let player: PlayerModel = {
        score: []
      };
      score.push(player);
      for (x = 0; x < this.numberOfRounds; x++) {
        let y: number = this.getScoreFromEntry(window.localStorage.getItem(this.makeScoreLocalStorageKey(i, x)));
        if (useDefault) {
          y = 0;
        }
        score[i].score[x] = _.cloneDeep(y);
      }
    }

    return score;
  }

  private getTotalsOrDefault(useDefault: boolean): number[] {
    let total: number[] = [];

    let i: number = 0;
    for (i; i < this.numberOfPlayers; i++) {
      let y = this.getScoreFromEntry(window.localStorage.getItem(this.makeTotalLocalStorageKey(i)));
      if (useDefault) {
        y = 0;
      }
      total[i] = _.cloneDeep(y);
    }

    return total;
  }

  private getNumberOfPlayersOrDefault(): string {
    const players: string = window.localStorage.getItem('players');
    return !this.isNullOrUndefined(players) ? players : _.cloneDeep(this.NUMBER_OF_PLAYERS_DEFAULT);
  }

  private getLastRoundOrDefault(): string {
    const lastRound: string = window.localStorage.getItem('last-round');
    return !this.isNullOrUndefined(lastRound) ? lastRound : _.cloneDeep(this.LAST_ROUND_DEFAULT);
  }

  private getNumberOfRoundsOrDefault(): string {
    const rounds: string = window.localStorage.getItem('rounds');
    return !this.isNullOrUndefined(rounds) ? rounds : _.cloneDeep(this.NUMBER_OF_ROUNDS_DEFAULT);
  }

  private getTitleOrDefault(): string {
    const title: string = window.localStorage.getItem('title');
    return !this.isNullOrUndefined(title) ? title : _.cloneDeep(this.TITLE_DEFAULT);
  }

  private getColorOrDefault(): string {
    const color: string = window.localStorage.getItem('color');
    return !this.isNullOrUndefined(color) ? color : _.cloneDeep(this.COLOR_DEFAULT);
  }

  private getSortByPlayerOrDefault(): string {
    const sortByRank: string = window.localStorage.getItem('sort-by-player');
    return !this.isNullOrUndefined(sortByRank) ? sortByRank : _.cloneDeep(this.SORT_BY_PLAYER_DEFAULT);
  }

  private getShowLastRoundOrDefault(): string {
    const showLastRound: string = window.localStorage.getItem('show-last-round');
    return !this.isNullOrUndefined(showLastRound) ? showLastRound : _.cloneDeep(this.SHOW_LAST_ROUND_DEFAULT);
  }

  private getApplyScoresNextRoundOrDefault(): string {
    const applyNextRound: string = window.localStorage.getItem('apply-scores-next-round');
    return !this.isNullOrUndefined(applyNextRound) ? applyNextRound : _.cloneDeep(this.APPLY_SCORES_NEXT_ROUND_DEFAULT);
  }

  private getUsePlayerOrDefault(): string {
    const usePlayer: string = window.localStorage.getItem('show-last-round');
    return !this.isNullOrUndefined(usePlayer) ? usePlayer : _.cloneDeep(this.USE_PLAYER_DEFAULT);
  }

  //#endregion

  //#region Save to Local Storage
  private saveScoresToLocalStorage(): void {
    let i: number = 0;
    let x: number;
    for (i; i < this.numberOfPlayers; i++) {
      for (x = 0; x < this.numberOfRounds; x++) {
        window.localStorage.setItem(this.makeScoreLocalStorageKey(i, x), this.scores[i].score[x].toString());
      }
    }
  }

  private saveTotalsToLocalStorage(): void {
    let i: number = 0;
    if (this.totals !== []) {
      for (i; i < this.numberOfPlayers; i++) {
        window.localStorage.setItem(this.makeTotalLocalStorageKey(i), this.totals[i].toString());
      }
    }
  }

  private saveToLocalStorage(): void {
    window.localStorage.setItem('players', this.numberOfPlayers.toString());
    window.localStorage.setItem('rounds', this.numberOfRounds.toString());
    window.localStorage.setItem('last-round', this.lastRoundNumber.toString());

    window.localStorage.setItem('sort-by-player', this.shouldSortByPlayer.toString());
    window.localStorage.setItem('show-last-round', this.showLastRoundScores.toString());
    window.localStorage.setItem('use-player', this.usePlayer.toString());
    window.localStorage.setItem('apply-scores-next-round', this.applyScoresNextRound.toString());

    window.localStorage.setItem('title', this.title);

    this.saveColorToLocalStorage();
    this.saveTotalsToLocalStorage();
    this.saveScoresToLocalStorage();
  }

  private saveColorToLocalStorage(): void {
    window.localStorage.setItem('color', this.color);
  }

  //#endregion
}
