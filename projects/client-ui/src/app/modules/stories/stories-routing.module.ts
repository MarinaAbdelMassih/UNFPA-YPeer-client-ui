import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoriesComponent} from './stories.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: StoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule {
}
