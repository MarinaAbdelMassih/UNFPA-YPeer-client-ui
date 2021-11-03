import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../../../../../src/app/shared/services/language.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  isArabic: boolean;
  constructor(private languageService: LanguageService) {
  }

  ngOnInit() {
    this.checkLanguage();
  }

  checkLanguage(): void {
     this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }
}
