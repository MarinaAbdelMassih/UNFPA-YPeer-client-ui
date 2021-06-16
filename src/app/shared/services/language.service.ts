import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  isArabic: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    const lang = this.getLang();
    if (lang === 'en') {
      this.isArabic.next(false);
    } else if (lang === 'ar') {
      this.isArabic.next(true);
    } else {
      this.setLang();
    }
  }

  private getLang(): string {
    return window.localStorage.getItem('lang');
  }

  private setLang() {
    window.localStorage.setItem('lang', 'en');
    this.isArabic.next(false);
  }

  public updateLang(lang: 'en' | 'ar') {
    window.localStorage.setItem('lang', lang);
    this.isArabic.next(lang === 'ar');
  }

  public getIsArabic() {
    return this.getLang() === 'ar';
  }
}
