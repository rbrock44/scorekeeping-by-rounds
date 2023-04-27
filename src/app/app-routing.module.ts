import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RankingPageComponent} from './page/ranking-page/ranking-page.component';
import {SettingsComponent} from './page/settings/settings.component';
import {ScoreEntryPageComponent} from './page/score-entry-page/score-entry-page.component';
import {BonusEntryComponent} from './page/bonus-entry/bonus-entry.component';
import { MainComponent } from './page/main/main.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
