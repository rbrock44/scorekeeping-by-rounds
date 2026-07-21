import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '../../service/settings.service';
import { ThemeService } from '../../service/theme.service';
import { Pages } from '../../constants/constants';
import { Location } from '@angular/common';

@Component({
    selector: 'app-header',
    template: `
    <div class="nav-bar-bar">
      <div class="nav-bar-div">
        <nav class="nav-bar-links" aria-label="Pages">
          <a (click)="click(0)"
            (keydown.enter)="click(0)"
            (keydown.space)="click(0)"
            [class.is-active]="service.show[0]"
            [attr.aria-current]="service.show[0] ? 'page' : null"
            tabindex="0"
            class="nav-bar-link"
          data-ranking-nav>Rankings</a>
          <a (click)="click(1)"
            (keydown.enter)="click(1)"
            (keydown.space)="click(1)"
            [class.is-active]="service.show[1]"
            [attr.aria-current]="service.show[1] ? 'page' : null"
            tabindex="0"
            class="nav-bar-link"
          data-score-entry-nav>Score Entry</a>
          @if (service.hasBonusRound) {
            <a (click)="click(2)"
            (keydown.enter)="click(2)"
            (keydown.space)="click(2)"
              [class.is-active]="service.show[2]"
              [attr.aria-current]="service.show[2] ? 'page' : null"
              tabindex="0"
              class="nav-bar-link"
            data-bonus-entry-nav>Bonus Round Entry</a>
          }
          <a (click)="click(3)"
            (keydown.enter)="click(3)"
            (keydown.space)="click(3)"
            [class.is-active]="service.show[3]"
            [attr.aria-current]="service.show[3] ? 'page' : null"
            tabindex="0"
            class="nav-bar-link"
          data-settings-nav>Settings</a>
        </nav>
        <button type="button"
          class="theme-toggle"
          [class.is-dark]="themeService.isDark"
          [attr.aria-pressed]="themeService.isDark"
          [attr.aria-label]="themeService.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          (click)="themeService.toggle()"
        data-theme-toggle>
          <svg class="theme-toggle-icon theme-toggle-icon--sun" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg class="theme-toggle-icon theme-toggle-icon--moon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
          </svg>
        </button>
      </div>
    </div>
    `,
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
})
export class HeaderComponent {
  service = inject(SettingsService);
  themeService = inject(ThemeService);
  private location = inject(Location);


  click(index: number): void {
    const urlParam = Pages[index];
    if (urlParam !== 'Rankings') {
      const queryParams = new URLSearchParams()
      queryParams.set('page', urlParam);
      this.location.replaceState(`${location.pathname}?${queryParams.toString()}`);
    } else {
      this.location.replaceState(`${location.pathname}`);
    }
    this.service.showPage(index);
  }
}
