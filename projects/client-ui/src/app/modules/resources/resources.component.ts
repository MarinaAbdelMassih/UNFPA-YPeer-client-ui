import {Component, OnInit} from '@angular/core';
import {ResourcesResolverService} from '../../../../../../src/app/shared/services/resources-resolver.service';
import {resourcesContent} from '../../../../../../src/app/shared/models/resources.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  resourcesData: resourcesContent;

  categoriesList = [
    {title: 'Training Manuals', count: 50, hideToggle: true},
    {title: 'Publications', count: 23, hideToggle: true},
    {title: 'Year', hideToggle: false},
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
        console.log(resourcesData)
      }, 200)

    });
    this.subscriptions.push(resourcesSub);
  }

}
