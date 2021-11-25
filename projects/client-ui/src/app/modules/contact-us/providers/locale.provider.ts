import {Provider} from '@angular/core';
import {LanguageService} from '../../../../../../../src/app/shared/services/language.service';
import {RECAPTCHA_LANGUAGE} from 'ng-recaptcha';

export class LocaleId extends String {
  constructor(private localeService: LanguageService) {
    super();
  }

  toString(): string {
    console.log('getIsArabic', this.localeService.getIsArabic());
    return this.localeService.getIsArabic() ? 'ar' : 'en';
  }

  valueOf(): string {
    return this.toString();
  }
}

export const LocaleProvider: Provider = {
  provide: RECAPTCHA_LANGUAGE,
  useClass: LocaleId,
  deps: [LanguageService],
};
