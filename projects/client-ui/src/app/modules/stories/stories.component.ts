import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {storiesContent} from '../../../../../../src/app/shared/models/stories.model';
import {StoriesResolverService} from '../../../../../../src/app/shared/services/stories-resolver.service';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-story',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StoriesComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  storiesData: storiesContent;

  categoriesList: CategoryModel[] = [
    {title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [2018, 2019, 2020,2021,2022]},
  ];

  constructor(private storiesResolverService: StoriesResolverService) { }

  ngOnInit() {
    this.getStoriesData();
  }

  getStoriesData(): void {
    let storiesSub = this.storiesResolverService.resolve().subscribe((storiesData: storiesContent) => {
      this.storiesData = undefined;
      setTimeout(() => {
        this.storiesData = storiesData;
      }, 200)

    });
    this.subscriptions.push(storiesSub);
  }

}
