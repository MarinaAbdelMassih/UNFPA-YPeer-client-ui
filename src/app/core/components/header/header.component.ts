import {Component, HostListener, Inject, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {LanguageService} from "../../../shared/services/language.service";
import {DOCUMENT} from "@angular/common";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {SignInService} from "../../../shared/services/sign-in.service";

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {

  isArabic: boolean = false;
  private languageSubscription: Subscription;
  @Input() userName: string;
  size: number;
  isIPad: boolean = false;
  isActive: boolean = false;

  @HostListener("window:resize", ['$event'])
  onResize(event) {
    this.size = event.target.innerWidth;
    this.isIPad = this.size<= 1200 && this.size >= 980;
  }

  constructor(private languageService: LanguageService, @Inject(DOCUMENT) private document: Document,
              private router: Router, private signInService: SignInService) {
  }

  ngOnInit() {
    this.checkUserStatus();
    this.size = window.innerWidth;
    this.isIPad = this.size<= 1200 && this.size >= 980;
    this.setDirectionBasedOnLanguage();

    $('.navbar-nav>li').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }

  checkUserStatus(): void {
    this.signInService.userAuthorized().then(userInfo => {
      if(userInfo && userInfo.status === 1) {
        this.isActive = true
      }
    });
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
  logout() {
    this.signInService.logout();
    location.reload();
  }
}
