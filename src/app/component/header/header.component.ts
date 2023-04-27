import { Component } from '@angular/core';
import { SettingsService } from '../../service/settings.service';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <div class="nav-bar-bar">
        <nav mat-tab-nav-bar>
          <div class="nav-bar-div">
            <a mat-tab-link
               mat-theme="accent"
               (click)="click(0)"
               class="nav-bar-link"
               data-ranking-nav>Rankings</a>
            <a mat-tab-link
               mat-theme="accent"
               (click)="click(1)"
               class="nav-bar-link"
               data-score-entry-nav>Score Entry</a>
            <a mat-tab-link
               mat-theme="accent"
               (click)="click(2)"
               class="nav-bar-link"
               *ngIf="service.hasBonusRound"
               data-bonus-entry-nav>Bonus Round Entry</a>
            <a mat-tab-link
               mat-theme="accent"
               (click)="click(3)"
               class="nav-bar-link"
               data-settings-nav>Settings</a>
          </div>
        </nav>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private service: SettingsService) {
  }

  click(index: number): void {
    this.service.showPage(index);
  }
}
