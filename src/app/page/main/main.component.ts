import { Component, inject } from '@angular/core';
import { SettingsService } from 'src/app/service/settings.service';
import { NgIf } from '@angular/common';
import { RankingPageComponent } from '../ranking-page/ranking-page.component';
import { ScoreEntryPageComponent } from '../score-entry-page/score-entry-page.component';
import { BonusEntryComponent } from '../bonus-entry/bonus-entry.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    imports: [NgIf, RankingPageComponent, ScoreEntryPageComponent, BonusEntryComponent, SettingsComponent]
})
export class MainComponent {  service = inject(SettingsService);

}
