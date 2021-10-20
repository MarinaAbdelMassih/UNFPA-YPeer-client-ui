import {Component, OnInit} from '@angular/core';
import {newsContent} from "../../../../../../src/app/shared/models/news.model";
import {TermsOfUseResolverService} from "../../../../../../src/app/shared/services/terms-of-use-resolver.service";
import {termsContent} from "../../../../../../src/app/shared/models/terms-of-use.model";

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss']
})
export class TermsOfUseComponent implements OnInit {
  title;
  description;

  constructor(private termsOfUseResolverService: TermsOfUseResolverService) {
  }

  ngOnInit() {
    this.getTermsData();
  }

  getTermsData(): void {
    this.termsOfUseResolverService.resolve().subscribe((termsData: any) => {
      this.title = termsData.title.title;
      console.log('title', this.title);
      this.description = termsData.description.description;
      console.log('description', this.description);
    });
  }

}
