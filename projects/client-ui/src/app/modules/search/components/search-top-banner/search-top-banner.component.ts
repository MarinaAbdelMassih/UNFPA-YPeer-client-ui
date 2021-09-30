import {Component, OnDestroy, OnInit} from '@angular/core';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-top-banner',
  templateUrl: './search-top-banner.component.html',
  styleUrls: ['./search-top-banner.component.scss']
})
export class SearchTopBannerComponent implements OnInit, OnDestroy {
  isArabic: boolean;
  subscription: Subscription;


  constructor(private languageService: LanguageService) {
  }

  ngOnInit() {
    this.checkLanguage();
  }

  checkLanguage(): void {
    this.subscription = this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
