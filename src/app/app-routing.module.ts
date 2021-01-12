import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RankingPageComponent} from './page/ranking-page/ranking-page.component';
import {SettingsPageComponent} from './page/settings-page/settings-page.component';
import {ScoreEntryPageComponent} from './page/score-entry-page/score-entry-page.component';


const routes: Routes = [
  {
    path: '',
    component: RankingPageComponent,
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
    path: 'settings',
    component: SettingsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
