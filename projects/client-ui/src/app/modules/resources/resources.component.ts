import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ResourcesResolverService} from '../../../../../../src/app/shared/services/resources-resolver.service';
import {resourcesContent, resourcesListItem} from '../../../../../../src/app/shared/models/resources.model';
import {Subscription} from 'rxjs';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ResourcesComponent implements OnInit {
  resourcesList: resourcesListItem[] = [];
  private subscriptions: Subscription[] = [];
  showLoadMore = true;

  resourcesData: resourcesContent;

  categoriesList: CategoryModel[] = [
    {title: {EN: 'Training Manuals', AR: 'دليل التدريب'}, count: 50, hideToggle: true, url: 'trainings'},
    {title: {EN: 'Publications', AR: 'المنشورات'}, count: 23, hideToggle: true, url: 'publications'},
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

  constructor(private resourcesResolverService: ResourcesResolverService) {
  }

  ngOnInit() {
    this.getResourcesData();
  }

  getResourcesData(): void {
    let resourcesSub = this.resourcesResolverService.getPageData(this.resourcesList.length, 2).subscribe((resourcesData: resourcesContent) => {
      this.resourcesData = undefined;
      setTimeout(() => {
        this.resourcesData = resourcesData;
        this.resourcesList = this.resourcesList.concat(resourcesData.resourcesList);
      this.showLoadMore = this.resourcesList.length < this.resourcesData.resourcesListTotal;
      }, 200);

    });
    this.subscriptions.push(resourcesSub);
  }
}
