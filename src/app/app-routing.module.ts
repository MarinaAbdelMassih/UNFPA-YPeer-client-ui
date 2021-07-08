import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/home/home.module').then(mod => mod.HomeModule),
  },

  {
    path: 'media',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/media/media.module').then(mod => mod.MediaModule),
  },

  {
    path: 'news',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/news/news.module').then(mod => mod.NewsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
