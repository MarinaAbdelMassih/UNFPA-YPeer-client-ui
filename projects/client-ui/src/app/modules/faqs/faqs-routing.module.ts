import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FaqsComponent} from './faqs.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: FaqsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqsRoutingModule {
}
