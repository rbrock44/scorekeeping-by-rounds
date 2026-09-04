import {PlayerModel} from './player.model';

// Shape of the JSON file produced by "Export Game" / read by "Import Game".
// Bump GAME_EXPORT_VERSION if this shape ever changes in a way old files
// can't be read as.
export const GAME_EXPORT_VERSION = 1;

export interface GameExportModel {
  version: number;
  exportedAt: string;
  title: string;
  numberOfPlayers: number;
  numberOfRounds: number;
  lastRoundNumber: number;
  usePlayer: boolean;
  shouldSortByPlayer: boolean;
  showLastRoundScores: boolean;
  applyScoresNextRound: boolean;
  hasBonusRound: boolean;
  color: string;
  scores: PlayerModel[];
  totals: number[];
}
