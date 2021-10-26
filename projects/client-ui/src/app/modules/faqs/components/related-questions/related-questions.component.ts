import {Component, Input, OnInit} from '@angular/core';
import {faqsListItem} from '../../../../../../../../src/app/shared/models/faqs.model';

@Component({
  selector: 'app-related-questions',
  templateUrl: './related-questions.component.html',
  styleUrls: ['./related-questions.component.scss']
})
export class RelatedQuestionsComponent implements OnInit {
  @Input() faqsLists: faqsListItem[];
  @Input() faqsAccLists: faqsListItem[];

  constructor() {
  }

  ngOnInit() {
  }

}
