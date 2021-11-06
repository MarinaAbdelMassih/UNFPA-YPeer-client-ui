import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../../../../../src/app/shared/services/search.service";
import {searchContent, SearchModel} from "../../../../../../src/app/shared/models/search.model";

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
  searchResults: searchContent;
  resultList = [];
  searchWord: '';

  constructor(private route:ActivatedRoute, private searchService: SearchService) {
    for (let i = 1; i < 5; i++) {
      this.pageNumbers.push(i);
    }
  }

  ngOnInit() {
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

  search(searchData) {
    if (searchData.searchType == null) {
      this.searchService.getSearchData(searchData.searchWord)
        .then(data => {
          this.searchResults = new SearchModel(data);
          for (let i =0; i < this.searchResults.searchItems.length; i++) {
            if (this.searchResults.searchItems[i]) {
              this.resultList.push(this.searchResults.searchItems[i])
            }
          }
          this.searchWord = searchData.searchWord;
        });
    }
  }

}
