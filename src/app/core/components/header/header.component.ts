import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {LanguageService} from "../../../shared/services/language.service";
import {DOCUMENT} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isArabic: boolean = false;
  private languageSubscription: Subscription;

  constructor(private languageService: LanguageService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
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

  changeLang(){
    this.languageService.updateLang(this.isArabic ? 'en' : 'ar');
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

}
