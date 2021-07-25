import {Component, Input, OnInit} from '@angular/core';
import {TranslationModel} from '../../models/translation.model';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.scss']
})
export class TagItemComponent implements OnInit {
  @Input() tagName : TranslationModel;

  constructor() { }

  ngOnInit() {
  }

}
