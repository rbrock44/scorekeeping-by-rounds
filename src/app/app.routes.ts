import { Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { RankingPageComponent } from './page/ranking-page/ranking-page.component';
import { ScoreEntryPageComponent } from './page/score-entry-page/score-entry-page.component';
import { BonusEntryComponent } from './page/bonus-entry/bonus-entry.component';
import { SettingsComponent } from './page/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'rankings',
    component: RankingPageComponent,
  },
  {
    path: 'score-entry',
    component: ScoreEntryPageComponent,
  },
  {
    path: 'bonus-round',
    component: BonusEntryComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  }
];
