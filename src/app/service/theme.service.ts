import { Injectable } from '@angular/core';

const STORAGE_KEY = 'theme';
const DARK = 'dark';
const LIGHT = 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark: boolean;

  constructor() {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    this.isDark = saved ? saved === DARK : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.apply();
  }

  toggle(): void {
    this.isDark = !this.isDark;
    this.apply();
    window.localStorage.setItem(STORAGE_KEY, this.isDark ? DARK : LIGHT);
  }

  private apply(): void {
    document.documentElement.setAttribute('data-theme', this.isDark ? DARK : LIGHT);
  }
}
