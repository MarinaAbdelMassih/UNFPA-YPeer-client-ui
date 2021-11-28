import {Injectable} from '@angular/core';
import {faqsContent, FaqsModel, links} from '../models/faqs.model';
import {Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {faqsQuery} from '../queries/faqs.query';

@Injectable({
  providedIn: 'root'
})
export class FaqsResolverService {

  private faqsData: faqsContent;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  resolve(): Observable<faqsContent> {
    return new Observable<faqsContent>(subscriber => {
      this.dataHandlerService.getDefaultPageData(faqsQuery, 'faqs', (res) => {
        return new FaqsModel(res.data.faqs);
      }).subscribe((faqsData: faqsContent) => {
        this.faqsData = faqsData;
        subscriber.next(this.faqsData);
      }, () => subscriber.next(null));
    });
  }
}
