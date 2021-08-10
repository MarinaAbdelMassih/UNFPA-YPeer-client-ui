import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsDetailsComponent} from './news-details.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsDetailsRoutingModule { }
