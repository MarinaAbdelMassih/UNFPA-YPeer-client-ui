import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {ActivatedRoute} from '@angular/router';
import {PublicationsResolverService} from '../../../../../../src/app/shared/services/publications-resolver.service';
import {
  publicationsContent,
  publicationsDetailsItem,
  publicationsListItem, tag
} from '../../../../../../src/app/shared/models/publications.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.scss']
})
export class PublicationDetailsComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  relatedPublications: publicationsListItem[];
  tagsList: tag[];
  categoriesList: CategoryModel[] = [
    {title: {EN: 'News', AR: 'الأخبار'}, count: 50, hideToggle: true, url: 'news'},
    {title: {EN: 'Events', AR: 'الأحداث'}, count: 23, hideToggle: true, url: 'events'},
    {title: {EN: 'Stories', AR: 'القصص'}, count: 18, hideToggle: true, url: 'stories'},
    {
      title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [
        {year: 2018, selected: false},
        {year: 2019, selected: false},
        {year: 2020, selected: false},
        {year: 2021, selected: false},
        {year: 2022, selected: false}
      ]
    },
  ];
  latestPublication: publicationsListItem[];
  index;
  publicationsDetailsData: publicationsDetailsItem;
  publicationsBasicData: publicationsListItem;

  constructor(private publicationsResolverService: PublicationsResolverService, public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getPublicationData();
    this.getPublicationDetailsData();
  }

  getPublicationData(): void {
    let publicationsSub = this.publicationsResolverService.resolve().subscribe((publicationsData: publicationsContent) => {
      this.tagsList = publicationsData.tags;
      this.relatedPublications = publicationsData.publicationsList.filter(item => (item.tagLabel == this.publicationsBasicData.tagLabel && item.id != this.index));
      this.publicationsBasicData = publicationsData.publicationsList.filter(item => item.id == this.index)[0];
      console.log('might ', this.relatedPublications);
      console.log(this.publicationsBasicData);
    });
    this.subscriptions.push(publicationsSub);
  }

  getPublicationDetailsData(): void {
    let publicationsSub = this.publicationsResolverService.getPageDetails(this.index).subscribe((publicationsData: publicationsContent) => {
      this.publicationsDetailsData = undefined;
      setTimeout(() => {
        this.publicationsDetailsData = publicationsData.publicationsDetailsItem[0];
        console.log('publication', this.publicationsDetailsData);
      }, 200);
    });
    this.subscriptions.push(publicationsSub);
  }
}
