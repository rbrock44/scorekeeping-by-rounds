import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '../../service/settings.service';
import { Pages } from '../../constants/constants';
import { Location } from '@angular/common';

@Component({
    selector: 'app-header',
    template: `
    <div class="nav-bar-bar">
      <nav class="nav-bar-div" aria-label="Pages">
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
    </div>
    `,
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
})
export class HeaderComponent {
  service = inject(SettingsService);
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
