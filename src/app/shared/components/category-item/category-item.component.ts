import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {TranslationModel} from '../../models/translation.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input() hideToggle: boolean;
  @Input() title: TranslationModel;
  @Input() count: number;
  @Input() yearsList: [{year: null, selected: false}];
  @Output() yearClicked: EventEmitter<number> = new EventEmitter<number>();
  @Input() url: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  yearFilterClicked(year){
    this.yearsList.map(year => year.selected = false);
    this.yearClicked.emit(year);
    year.selected = true;
  }

  goToSelectedPage(): void {
    if (this.url) {
      this.router.navigate([this.url]);
    }
  }

}
