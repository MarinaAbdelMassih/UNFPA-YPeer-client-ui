import {Component, OnInit} from '@angular/core';
import {PrivacyPolicyResolverService} from '../../../../../../src/app/shared/services/privacy-policy-resolver.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  title;
  description;

  constructor(private privacyPolicyResolverService: PrivacyPolicyResolverService) {
  }

  ngOnInit() {
    this.getPrivacyPolicyData();
  }

  getPrivacyPolicyData(): void {
    this.privacyPolicyResolverService.resolve().subscribe((termsData: any) => {
      this.title = termsData.title.title;
      console.log('title', this.title);
      this.description = termsData.description.description;
      console.log('description', this.description);
    });
  }

}
