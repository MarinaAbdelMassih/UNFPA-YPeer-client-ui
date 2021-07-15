import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {mediaContent} from '../../../../../../src/app/shared/models/media.model';
import {MediaResolverService} from '../../../../../../src/app/shared/services/media-resolver.service';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MediaComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  mediaData: mediaContent;

  categoriesList: CategoryModel[] = [
    {title: {EN: 'News', AR: 'الأخبار'} , count: 50, hideToggle: true, url: 'news'},
    {title: {EN: 'Events', AR: 'الأحداث'} , count: 23, hideToggle: true, url: 'events'},
    {title: {EN: 'Stories', AR: 'القصص'} , count: 18, hideToggle: true, url: 'stories'},
    {title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [2018, 2019, 2020,2021,2022]},
  ];

  constructor(private mediaResolverService: MediaResolverService) { }

  ngOnInit() {
    this.getMediaData();
  }

  getMediaData(): void {
    let mediaSub = this.mediaResolverService.resolve().subscribe((mediaData: mediaContent) => {
      this.mediaData = undefined;
      setTimeout(() => {
        this.mediaData = mediaData;
      }, 200)

    });
    this.subscriptions.push(mediaSub);
  }

}
