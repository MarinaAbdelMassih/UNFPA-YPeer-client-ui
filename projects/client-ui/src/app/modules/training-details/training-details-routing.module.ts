import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainingsComponent} from '../trainings/trainings.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: TrainingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingDetailsRoutingModule {
}
