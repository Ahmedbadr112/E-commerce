import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {
  private readonly _TranslateService = inject(TranslateService);
  constructor() {
    let savedLang = localStorage.getItem('lang');
    this._TranslateService.setDefaultLang('en');
    this._TranslateService.use(savedLang!); 
    this.changeDir()
  }
  changeDir(): void {
    let savedLang = localStorage.getItem('lang');
    if (savedLang === 'en') {
      document.documentElement.dir = 'ltr';
    } else if (savedLang === 'ar') {
      document.documentElement.dir = 'rtl';
    }
  }
}
