import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input() hideToggle: boolean;
  @Input() title: string;
  @Input() count: number;
  @Input() yearsList: [];
  @Output() yearClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  yearFilterClicked(year){
    this.yearClicked.emit(year);
  }

}
