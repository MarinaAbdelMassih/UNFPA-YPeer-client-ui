import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {LanguageService} from './shared/services/language.service';
import {Subscription} from 'rxjs';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private languageSubscription: Subscription;
  isArabic = false;

  constructor(private languageService: LanguageService, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.setDirectionBasedOnLanguage();
  }

  setDirectionBasedOnLanguage(): void {
    this.languageSubscription = this.languageService.isArabic.subscribe((isArabic) => {
      this.isArabic = isArabic;
      if (isArabic) {
        this.document.dir = 'rtl';
        this.document.body.dir = 'rtl';
      } else {
        this.document.dir = 'ltr';
        this.document.body.dir = 'ltr';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
