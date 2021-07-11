import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LanguageService} from '../services/language.service';

@Directive({
  selector: '[appTranslatePlaceholderLocal]'
})
export class TranslatePlaceholderLocalDirective implements OnInit, OnDestroy {
  @Input('translatePlaceholderLocal') translateLocalObject: { AR: string, EN: string };

  private subscribe: Subscription;

  constructor(private el: ElementRef, private languageService: LanguageService) {
  }


  ngOnInit(): void {
    if (this.translateLocalObject) {
      this.subscribe = this.languageService.isArabic.subscribe((isArabic: boolean) => {
        this.el.nativeElement.placeholder = isArabic ? this.translateLocalObject.AR : this.translateLocalObject.EN;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }
}
