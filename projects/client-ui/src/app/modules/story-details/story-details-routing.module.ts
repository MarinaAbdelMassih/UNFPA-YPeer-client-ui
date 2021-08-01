import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoryDetailsComponent} from './story-details.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: StoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryDetailsRoutingModule {
}
