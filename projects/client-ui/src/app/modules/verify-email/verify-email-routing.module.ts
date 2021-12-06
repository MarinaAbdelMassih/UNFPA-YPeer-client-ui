import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VerifyEmailComponent} from './verify-email.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyEmailRoutingModule {
}
