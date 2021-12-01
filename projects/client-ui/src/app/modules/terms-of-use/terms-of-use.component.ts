import {Component, OnInit} from '@angular/core';
import {TermsOfUseResolverService} from "../../../../../../src/app/shared/services/terms-of-use-resolver.service";

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
      this.description = termsData.description.description;
    });
  }

}
