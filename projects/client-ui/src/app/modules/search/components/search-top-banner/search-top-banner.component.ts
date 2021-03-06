import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-top-banner',
  templateUrl: './search-top-banner.component.html',
  styleUrls: ['./search-top-banner.component.scss'],
})
export class SearchTopBannerComponent implements OnInit, OnDestroy {
  isArabic: boolean;
  subscription: Subscription;
  @Input() set SearchType(searchType: string) {
    if (searchType !== this.searchType.value) {
      this.searchType.patchValue(searchType);
      this.search();
    }
  }
  @Output() searchClicked: EventEmitter<any> = new EventEmitter<any>();
  searchField = null;
  searchType: FormControl = new FormControl();


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

  search() {
    if (this.searchField && this.searchField.trim()) {
      this.searchClicked.emit({searchWord: this.searchField, searchType: this.searchType.value});
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
