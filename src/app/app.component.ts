import {Component, OnDestroy} from '@angular/core';
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
    imports: [HeaderComponent, RouterOutlet, AlertComponent]
})
export class AppComponent implements OnDestroy {
  title = 'scorekeeping-by-rounds';

  constructor(private settingsService: SettingsService) {
  }

  ngOnDestroy(): void {
    this.settingsService.ngOnDestroy();
  }
}
