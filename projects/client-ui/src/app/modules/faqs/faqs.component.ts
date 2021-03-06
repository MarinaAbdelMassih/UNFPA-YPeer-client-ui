import {Component, OnInit} from '@angular/core';
import {FaqsResolverService} from '../../../../../../src/app/shared/services/faqs-resolver.service';
import {faqsContent, faqsListItem} from '../../../../../../src/app/shared/models/faqs.model';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  faqsList: faqsListItem[];
  faqsAccList: faqsListItem[];
  links;


  constructor(private faqsResolverService: FaqsResolverService) {
  }

  ngOnInit() {
     this.getFaqsData();
  }

  getFaqsData(): void {
    this.faqsResolverService.resolve().subscribe((faqsData: faqsContent) => {
      this.faqsList = faqsData.faqsList;
      this.links = faqsData.links;
      this.faqsAccList = faqsData.faqsAccQuesList;
    });
  }
}
