import {Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {LanguageService} from '../services/language.service';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appTranslateLocal]'
})
export class TranslateLocalDirective implements OnInit, OnDestroy, OnChanges {

  @Input('translateLocal') translateLocalObject: {AR: string, EN: string};
  @Input() isHTML: boolean;
  private subscribe: Subscription;

  constructor(private elementRef: ElementRef, private languageService: LanguageService) { }

  ngOnInit(): void {
    if (this.translateLocalObject) {
      this.subscribe = this.languageService.isArabic.subscribe((isArabic: boolean) => {
        if (!this.isHTML) {
          this.elementRef.nativeElement.innerText = isArabic ? this.translateLocalObject.AR : this.translateLocalObject.EN;
        } else {
          this.elementRef.nativeElement.innerHTML = isArabic ? this.translateLocalObject.AR : this.translateLocalObject.EN;
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.translateLocalObject) {
      if (this.translateLocalObject) {
        this.subscribe = this.languageService.isArabic.subscribe((isArabic: boolean) => {
          if (!this.isHTML) {
            this.elementRef.nativeElement.innerText = isArabic ? this.translateLocalObject.AR : this.translateLocalObject.EN;
          } else {
            this.elementRef.nativeElement.innerHTML = isArabic ? this.translateLocalObject.AR : this.translateLocalObject.EN;
          }
        });
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }

}
