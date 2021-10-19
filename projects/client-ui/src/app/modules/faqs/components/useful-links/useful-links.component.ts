import {Component, Input, OnInit} from '@angular/core';
import { links} from '../../../../../../../../src/app/shared/models/faqs.model';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss']
})
export class UsefulLinksComponent implements OnInit {
  @Input() links: links[];

  constructor() { }

  ngOnInit() {
  }

}
