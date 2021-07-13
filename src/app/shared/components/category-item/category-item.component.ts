import {Component, Input, OnInit} from '@angular/core';
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
  @Input() yearsList: [];
  @Input() url: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSelectedPage(): void {
    if (this.url) {
      this.router.navigate([this.url]);
    }
  }

}
