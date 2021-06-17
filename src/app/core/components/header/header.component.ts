import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../../shared/services/language.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isArabic: boolean = false;
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.isArabic.subscribe(isArabic => {
      this.isArabic = isArabic
    })
  }

  changeLang(){
    this.languageService.updateLang(this.isArabic ? 'en' : 'ar');
  }

}
