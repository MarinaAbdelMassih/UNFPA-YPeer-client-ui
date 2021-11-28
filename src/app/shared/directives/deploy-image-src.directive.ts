import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {environment} from "../../../environments/environment";


@Directive({
  selector: '[deploySrc]'
})
export class DeployImageSrcDirective implements OnInit {

  @Input('deploySrc') src: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    let srcUrl = `${environment.deployUrl}/${this.src}`;
    this.renderer.setAttribute(this.el.nativeElement, 'src', srcUrl);
  }
}
