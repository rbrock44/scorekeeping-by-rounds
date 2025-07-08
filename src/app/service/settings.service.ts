import {Injectable, OnDestroy} from '@angular/core';
import * as _ from 'lodash';
import {Observable, Subject} from 'rxjs';
import {PlayerModel} from '../model/player.model';
import {PlayerScoreModel} from '../model/player-score.model';
import {ExcelService} from './excel.service';
import {LocalStorageSaveItem} from '../model/local-storage-save-item.model';
import {COLOR_DEFAULT, FALSE_DEFAULT, TEN, TITLE_DEFAULT, TRUE_DEFAULT, ZERO, setAll, Pages} from '../constants/constants';

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

  // ranking
  // score entry
  // bonus entry
  // settings
  show = [true, false, false, false]

  title: string;
  shouldSortByPlayer: boolean;
  usePlayer: boolean;
  hasBonusRound: boolean;
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

  showPage(index: number) {
    setAll(this.show, false);
    this.show[index] = true;
  }

  showPageWithUrlParam(param: string): void {
    const index = Pages[param];
    this.showPage(index);
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
    applyScoresNextRound: boolean,
    hasBonusRound: boolean,
  ) {
    this.numberOfRounds = rounds;

    this.numberOfPlayers = players;
    this.usePlayer = usePlayer;
    this.hasBonusRound = hasBonusRound;
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

    this.numberOfRounds = +_.cloneDeep(TEN);
    this.numberOfPlayers = +_.cloneDeep(TEN);
    this.lastRoundNumber = +_.cloneDeep(ZERO);

    this.usePlayer = _.cloneDeep(this.getBoolean(TRUE_DEFAULT));
    this.hasBonusRound = _.cloneDeep(this.getBoolean(FALSE_DEFAULT));
    this.shouldSortByPlayer = _.cloneDeep(this.getBoolean(TRUE_DEFAULT));
    this.showLastRoundScores = _.cloneDeep(this.getBoolean(TRUE_DEFAULT));
    this.applyScoresNextRound = _.cloneDeep(this.getBoolean(TRUE_DEFAULT));

    this.title = _.cloneDeep(TITLE_DEFAULT);
    this.setColor(_.cloneDeep(COLOR_DEFAULT));

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

    this.updateTotals();
    this.scoreChanged();
    this.lastRoundChanged(roundIndex);
  }

  public updateBonus(scores: number[]): void {
    let x: number = 0;
    for (x; x < this.numberOfPlayers; x++) {
      this.scores[x].bonus = scores[x];
    }

    this.updateTotals();
    this.scoreChanged();
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
      let player = this.scores[i];
      x = 0;
      total = 0;
      let minIndex = this.getMinIndex(player);
      for (x; x < this.numberOfRounds; x++) {
        if (this.hasBonusRound && minIndex === x && player.bonus > player.score[x]) {
          total += player.bonus;
        } else {
          total += player.score[x];
        }
      }

      this.totals[i] = total;
    }

    this.saveToLocalStorage();
  }

  private getMinIndex(player: PlayerModel): number {
    if (this.lastRoundNumber >= this.numberOfRounds - 1) {
      return player.score.indexOf(Math.min(...player.score));
    } else {
      return -1;
    }
  }

  public exportScoresToExcel(): void {
    const name: string = 'Name';
    const total: string = 'Total';
    const round: string = 'Round ';
    const bonus: string = 'Bonus Round';
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

      if (this.hasBonusRound) {
        data[bonus] = this.scores[i].bonus;
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

    if (this.lastRoundNumber < this.figureOutLastRoundEnteredNotAboveNumberOfRounds()) {
      this.lastRoundNumber = this.figureOutLastRoundEnteredNotAboveNumberOfRounds();
    }
    this.kickOffInitialScoreAndTotal();
  }

  private readFromLocalStorage(): void {
    this.numberOfPlayers = +this.getItemOrDefault('players', TEN + '');
    this.numberOfRounds = +this.getItemOrDefault('rounds', TEN + '');
    this.lastRoundNumber = +this.getItemOrDefault('last-round', ZERO + '');

    this.title = this.getItemOrDefault('title', TITLE_DEFAULT);

    this.shouldSortByPlayer = this.getBoolean(this.getItemOrDefault('sort-by-player', TRUE_DEFAULT));
    this.showLastRoundScores = this.getBoolean(this.getItemOrDefault('show-last-round', TRUE_DEFAULT));
    this.usePlayer = this.getBoolean(this.getItemOrDefault('use-player', TRUE_DEFAULT));
    this.hasBonusRound = this.getBoolean(this.getItemOrDefault('has-bonus-round', FALSE_DEFAULT));
    this.applyScoresNextRound = this.getBoolean(this.getItemOrDefault('apply-scores-next-round', TRUE_DEFAULT));

    this.scores = this.getScoresOrDefault(false);
    this.totals = this.getTotalsOrDefault(false);

    this.setColor(this.getItemOrDefault('color', COLOR_DEFAULT));
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
    return str == null || str === 'undefined' || str === 'null';
  }

  private getTotalsOrDefault(useDefault: boolean): number[] {
    const total: string = window.localStorage.getItem('totals');
    let value: number[] = !this.isNullOrUndefined(total) ? JSON.parse(total) : _.cloneDeep([]);

    if (value.length === 0 || useDefault) {
      let i: number = 0;
      for (i; i < this.numberOfPlayers; i++) {
        let y = 0;

        value[i] = _.cloneDeep(y);
      }
    }

    return value;
  }

  private getScoresOrDefault(useDefault: boolean): PlayerModel[] {
    const score: string = window.localStorage.getItem('scores');
    let value: PlayerModel[] = !this.isNullOrUndefined(score) ? JSON.parse(score) : _.cloneDeep([]);

    if (value.length === 0 || useDefault) {
      let i: number = 0;
      for (i; i < this.numberOfPlayers; i++) {
        let y: PlayerModel = {
          score: [],
          bonus: 0
        };

        let x: number = 0;
        for (x; x < this.numberOfRounds; x++) {
          y.score.push(0);
        }

        value[i] = _.cloneDeep(y);
      }
    }

    return value;
  }

  private getItemOrDefault(key: string, defaultValue: string): string {
    const item: string = window.localStorage.getItem(key);
    return !this.isNullOrUndefined(item) ? item : _.cloneDeep(defaultValue);
  }

  private saveToLocalStorage(): void {
    let items: LocalStorageSaveItem[] = [
      new LocalStorageSaveItem({
        key: 'players',
        value: this.numberOfPlayers.toString()
      }),
      new LocalStorageSaveItem({
        key: 'rounds',
        value: this.numberOfRounds.toString()
      }),
      new LocalStorageSaveItem({
        key: 'last-round',
        value: this.lastRoundNumber.toString()
      }),
      new LocalStorageSaveItem({
        key: 'sort-by-player',
        value: this.shouldSortByPlayer.toString()
      }),
      new LocalStorageSaveItem({
        key: 'show-last-round',
        value: this.showLastRoundScores.toString()
      }),
      new LocalStorageSaveItem({
        key: 'use-player',
        value: this.usePlayer.toString()
      }),
      new LocalStorageSaveItem({
        key: 'has-bonus-round',
        value: this.hasBonusRound.toString()
      }),
      new LocalStorageSaveItem({
        key: 'apply-scores-next-round',
        value: this.applyScoresNextRound.toString()
      }),
      new LocalStorageSaveItem({
        key: 'title',
        value: this.title
      }),
      new LocalStorageSaveItem({
        key: 'scores',
        value: JSON.stringify(this.scores)
      }),
      new LocalStorageSaveItem({
        key: 'totals',
        value: JSON.stringify(this.totals)
      }),
    ];

    items.forEach(item => {
      this.saveItemToLocalStorage(item.key, item.value);
    });

    this.saveColorToLocalStorage();
  }

  private saveColorToLocalStorage(): void {
    window.localStorage.setItem('color', this.color);
  }

  private saveItemToLocalStorage(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }
}
