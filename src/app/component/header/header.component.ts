import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <div class="nav-bar-bar">
        <nav mat-tab-nav-bar>
          <div class="nav-bar-div">
            <a mat-tab-link
               mat-theme="accent"
               [routerLink]="['/rankings']"
               class="nav-bar-link"
               data-ranking-nav>Rankings</a>
            <a mat-tab-link
               mat-theme="accent"
               [routerLink]="['/score-entry']"
               class="nav-bar-link"
               data-score-entry-nav>Score Entry</a>
            <a mat-tab-link
               mat-theme="accent"
               [routerLink]="['/settings']"
               class="nav-bar-link"
               data-settings-nav>Settings</a>
          </div>
        </nav>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
