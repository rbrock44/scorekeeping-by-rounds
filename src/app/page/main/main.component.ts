import { Component } from '@angular/core';
import { SettingsService } from 'src/app/service/settings.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    public service: SettingsService
  ) { }
}
