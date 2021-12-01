import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {termsContent, TermsModel} from '../models/terms-of-use.model';
import {TermsQuery} from '../queries/terms-of-use.query';

@Injectable({
  providedIn: 'root'
})
export class TermsOfUseResolverService {

  private termsData: termsContent;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  resolve(): Observable<termsContent> {
    return new Observable<termsContent>(subscriber => {
      this.dataHandlerService.getDefaultPageData(TermsQuery, 'terms', (res) => {
        return new TermsModel(res.data.termsOfUse);
      }).subscribe((termsData: termsContent) => {
        this.termsData = termsData;
        subscriber.next(this.termsData);
      }, () => subscriber.next(null));
    });
  }
}
