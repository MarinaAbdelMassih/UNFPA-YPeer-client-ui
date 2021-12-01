import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItworxIframeComponent} from './itworx-iframe.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: ItworxIframeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItworxIframeRoutingModule { }
