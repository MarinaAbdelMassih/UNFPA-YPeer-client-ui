import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tags = [{id: 1, name: {EN: 'productive health', AR: 'صحة منتجة'}}, {id: 2, name: {EN: 'productive', AR: ' منتجة'}}];
  details = [{
    title: 'title',
    type: 'type',
    description: 'productive health',
    img: 'assets/images/discover-more-events.png'
  }, {
    title: 'title',
    type: 'type',
    description: 'productive health',
    img: 'assets/images/discover-more-events.png'
  }, {
    title: 'title',
    type: 'type',
    description: 'productive health',
    img: 'assets/images/discover-more-events.png'
  }];
  pageNumbers: number[] = [];
  currentPage = 1;
  @Output() PageNumber = new EventEmitter<number>();

  constructor() {
    for (let i = 1; i < 5; i++) {
      this.pageNumbers.push(i);
    }
  }

  changeNumber(index): void {
    this.currentPage = index;
    this.PageNumber.emit(this.currentPage);
    console.log('page no', this.currentPage);
  }

  first(): void {
    this.changeNumber(this.currentPage);
  }

  last(): void {
    this.changeNumber(this.pageNumbers.length);
  }

  next(): void {
    this.changeNumber(this.currentPage + 1);
  }

  prev(): void {
    this.changeNumber(this.currentPage - 1);
  }

  ngOnInit() {
  }

}
