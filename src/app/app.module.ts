import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SettingsComponent} from './page/settings/settings.component';
import {RankingPageComponent} from './page/ranking-page/ranking-page.component';
import {ScoreEntryPageComponent} from './page/score-entry-page/score-entry-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './component/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {YesNoDropdownComponent} from './component/yes-no-dropdown/yes-no-dropdown.component';
import {CommonModule} from '@angular/common';
import {ConfirmationPopupComponent} from './component/confirmation-popup/confirmation-popup.component';
import {AlertModule} from './component/alert/alert.module';
import {ExcelService} from './service/excel.service';
import {SettingsService} from './service/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationPopupComponent,
    HeaderComponent,
    RankingPageComponent,
    ScoreEntryPageComponent,
    SettingsComponent,
    YesNoDropdownComponent,
  ],
  entryComponents: [ConfirmationPopupComponent],
  imports: [
    AlertModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    ExcelService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
