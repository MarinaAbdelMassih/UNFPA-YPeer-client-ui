import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {LanguageService} from "../../../shared/services/language.service";
import {DOCUMENT} from "@angular/common";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {

  isArabic: boolean = false;
  private languageSubscription: Subscription;
  loginName: any;

  constructor(private languageService: LanguageService, @Inject(DOCUMENT) private document: Document, private router: Router) {
  }

  ngOnInit() {
    this.setDirectionBasedOnLanguage();
    this.loginName = JSON.parse(localStorage.getItem('userData')).username;
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

  changeLang() {
    this.languageService.updateLang(this.isArabic ? 'en' : 'ar');
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  redirect() {
    this.router.navigate(['/signUp']);
  }
}
