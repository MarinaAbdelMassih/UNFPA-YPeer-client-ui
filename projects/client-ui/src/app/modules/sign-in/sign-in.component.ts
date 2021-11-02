import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../../../../../src/app/shared/services/language.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isArabic: boolean;
  constructor(private languageService: LanguageService,) { }

  ngOnInit() {
  }
  checkLanguage(): void {
     this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }
}
