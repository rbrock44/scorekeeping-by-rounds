import { Component, OnDestroy, inject, ChangeDetectionStrategy } from '@angular/core';
import {SettingsService} from './service/settings.service';
import { HeaderComponent } from './component/header/header.component';
import { AlertComponent } from './component/alert/alert.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <div>
      <app-header></app-header>
      <div class="main-content">
        <router-outlet></router-outlet>
        <app-alert></app-alert>
      </div>
    </div>
  `,
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [HeaderComponent, RouterOutlet, AlertComponent]
})
export class AppComponent implements OnDestroy {
  private settingsService = inject(SettingsService);

  title = 'scorekeeping-by-rounds';

  ngOnDestroy(): void {
    this.settingsService.ngOnDestroy();
  }
}
