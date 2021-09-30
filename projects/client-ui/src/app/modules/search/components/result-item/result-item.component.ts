import {Component, Input, OnInit} from '@angular/core';
import {TranslationModel} from '../../../../../../../../src/app/shared/models/translation.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() description: string;
  @Input() tagsList ;

  constructor() {
  }

  ngOnInit() {
  }

}
