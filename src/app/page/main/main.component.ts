import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '../../service/settings.service';

import { RankingPageComponent } from '../ranking-page/ranking-page.component';
import { ScoreEntryPageComponent } from '../score-entry-page/score-entry-page.component';
import { BonusEntryComponent } from '../bonus-entry/bonus-entry.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RankingPageComponent, ScoreEntryPageComponent, BonusEntryComponent, SettingsComponent]
})
export class MainComponent {  service = inject(SettingsService);

}
