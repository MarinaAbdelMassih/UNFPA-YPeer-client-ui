import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {PrivacyPolicyContent, PrivacyPolicyModel} from '../models/privacy-policy.model';
import {PrivacyPolicyQuery} from '../queries/privacy-policy.query';

@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyResolverService {
  private privacyData: PrivacyPolicyContent;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  resolve(): Observable<PrivacyPolicyContent> {
    return new Observable<PrivacyPolicyContent>(subscriber => {
      this.dataHandlerService.getDefaultPageData(PrivacyPolicyQuery, 'privacyPolicy', (res) => {
        return new PrivacyPolicyModel(res.data.privacyPolicy);
      }).subscribe((privacyData: PrivacyPolicyContent) => {
        this.privacyData = privacyData;
        subscriber.next(this.privacyData);
      }, () => subscriber.next(null));
    });
  }
}
