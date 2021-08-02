import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventDetailsComponent} from './event-details.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: EventDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailsRoutingModule {
}
