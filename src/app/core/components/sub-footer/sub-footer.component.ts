import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubFooterComponent implements OnInit {

  @Input() showLinks: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
