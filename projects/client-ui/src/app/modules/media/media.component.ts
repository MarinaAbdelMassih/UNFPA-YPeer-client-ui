import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {mediaContent} from '../../../../../../src/app/shared/models/media.model';
import {MediaResolverService} from '../../../../../../src/app/shared/services/media-resolver.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  mediaData: mediaContent;

  categoriesList = [
    {title: 'News' , count: 50, hideToggle: true},
    {title: 'Events' , count: 23, hideToggle: true},
    {title: 'Stories' , count: 18, hideToggle: true},
    {title: 'Year', hideToggle: false},
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
        console.log(mediaData)
      }, 200)

    });
    this.subscriptions.push(mediaSub);
  }

}
