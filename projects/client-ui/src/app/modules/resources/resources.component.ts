import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ResourcesResolverService} from '../../../../../../src/app/shared/services/resources-resolver.service';
import {resourcesContent} from '../../../../../../src/app/shared/models/resources.model';
import {Subscription} from 'rxjs';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ResourcesComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  resourcesData: resourcesContent;

  categoriesList: CategoryModel[] = [
    {title: {EN: 'Training Manuals', AR: 'دليل التدريب'}, count: 50, hideToggle: true},
    {title: {EN: 'Publications', AR: 'المنشورات'}, count: 23, hideToggle: true},
    {title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [
        {year: 2018, selected: false},
        {year: 2019, selected: false},
        {year: 2020, selected: false},
        {year: 2021, selected: false},
        {year: 2022, selected: false}
      ]},
  ];

  constructor(private resourcesResolverService: ResourcesResolverService) {
  }

  ngOnInit() {
    this.getResourcesData();
  }

  getResourcesData(): void {
    let resourcesSub = this.resourcesResolverService.resolve().subscribe((resourcesData: resourcesContent) => {
      this.resourcesData = undefined;
      setTimeout(() => {
        this.resourcesData = resourcesData;
      }, 200)

    });
    this.subscriptions.push(resourcesSub);
  }

}