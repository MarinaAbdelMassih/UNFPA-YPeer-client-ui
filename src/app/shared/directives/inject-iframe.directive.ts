import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[injectIframe]'
})
export class InjectIframeDirective implements AfterViewInit {
  @Input('injectIframe') src: string;

  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }

  ngAfterViewInit(): void {
    let iframe = this.renderer2.createElement('iframe');
    this.renderer2.setAttribute(iframe, 'src', this.src);
    this.renderer2.setStyle(iframe, 'width', '100%');
    this.renderer2.setStyle(iframe, 'height', '100%');
    this.renderer2.setStyle(iframe, 'border', 'none');
    this.renderer2.listen(iframe, 'load', () => {
    });
    this.renderer2.appendChild(this.el.nativeElement, iframe);
  }


}
