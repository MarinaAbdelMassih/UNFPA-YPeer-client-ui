import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    path: 'publications',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/publications/publications.module').then(mod => mod.PublicationsModule),
  },

  {
    path: 'resources',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/resources/resources.module').then(mod => mod.ResourcesModule),
  },

  {
    path: 'events',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/events/events.module').then(mod => mod.EventsModule),
  },

  {
    path: 'news',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/news/news.module').then(mod => mod.NewsModule),
  },

  {
    path: 'stories',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/stories/stories.module').then(mod => mod.StoriesModule),
  },

  {
    path: 'news-details/:id',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/news-details/news-details.module').then(mod => mod.NewsDetailsModule),
  },

  {
    path: 'aboutUs',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/about-us/about-us.module').then(mod => mod.AboutUsModule),
  },

  {
    path: 'contactUs',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/contact-us/contact-us.module').then(mod => mod.ContactUsModule),
  },
  {
    path: 'trainings',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/trainings/trainings.module').then(mod => mod.TrainingsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
