import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TermsOfUseComponent} from './terms-of-use.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: TermsOfUseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsOfUseRoutingModule {
}
