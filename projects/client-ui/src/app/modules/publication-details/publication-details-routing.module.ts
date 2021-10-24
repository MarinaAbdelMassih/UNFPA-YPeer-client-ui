import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PublicationDetailsComponent} from './publication-details.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: PublicationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationDetailsRoutingModule {
}
