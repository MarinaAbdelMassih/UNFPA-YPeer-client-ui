import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeScreenApprovedComponent} from "./shared/components/welcome-screen-approved/welcome-screen-approved.component";
import {WelcomeScreenPendingComponent} from "./shared/components/welcome-screen-pending/welcome-screen-pending.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {NoAuthGuard} from "./core/guards/no-auth.guard";
import {AuthResolverService} from "./shared/resolvers/auth-resolver.service";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/home/home.module').then(mod => mod.HomeModule),
    resolve: {
      auth: AuthResolverService
    },
  },

  {
    path: 'media',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/media/media.module').then(mod => mod.MediaModule),
    resolve: {
      auth: AuthResolverService
    },
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
    resolve: {
      auth: AuthResolverService
    },
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
    resolve: {
      auth: AuthResolverService
    },
  },

  {
    path: 'stories',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/stories/stories.module').then(mod => mod.StoriesModule),
    resolve: {
      auth: AuthResolverService
    },
  },

  {
    path: 'publications',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/publications/publications.module').then(mod => mod.PublicationsModule),
    resolve: {
      auth: AuthResolverService
    },
  },

  {
    path: 'trainings',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/trainings/trainings.module').then(mod => mod.TrainingsModule),
    resolve: {
      auth: AuthResolverService
    },
  },
  {
    path: 'news-details/:id',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/news-details/news-details.module').then(mod => mod.NewsDetailsModule),
    resolve: {
      auth: AuthResolverService
    },
  },

  {
    path: 'about-us',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/about-us/about-us.module').then(mod => mod.AboutUsModule),
  },

  {
    path: 'contact-us',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/contact-us/contact-us.module').then(mod => mod.ContactUsModule),
    resolve: {
      auth: AuthResolverService
    },
  },
  {
    path: 'trainings',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/trainings/trainings.module').then(mod => mod.TrainingsModule),
    resolve: {
      auth: AuthResolverService
    },
  },
  {
    path: 'event-details/:id',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/event-details/event-details.module').then(mod => mod.EventDetailsModule),
  },
  {
    path: 'story-details/:id',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/story-details/story-details.module').then(mod => mod.StoryDetailsModule),
    resolve: {
      auth: AuthResolverService
    },
  },
  {
    path: 'publication-details/:id',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/publication-details/publication-details.module').then(mod => mod.PublicationDetailsModule),
    resolve: {
      auth: AuthResolverService
    },
  },
  {
    path: 'training-details/:id',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/training-details/training-details.module').then(mod => mod.TrainingDetailsModule),
    resolve: {
      auth: AuthResolverService
    },
  },
  {
    path: 'course-catalog',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/course-catalog/course-catalog.module').then(mod => mod.CourseCatalogModule),
    resolve: {
      auth: AuthResolverService
    },
  },
  {
    path: 'profile',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/user-profile/user-profile.module').then(mod => mod.UserProfileModule),
    resolve: {
      auth: AuthResolverService
    },
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'signIn',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/sign-in/sign-in.module').then(mod => mod.SignInModule),
    resolve: {
      auth: AuthResolverService
    },
    canLoad: [NoAuthGuard],
    canActivate: [NoAuthGuard]
  },
  {
    path: 'signUp',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/sign-up/sign-up.module').then(mod => mod.SignUpModule),
    resolve: {
      auth: AuthResolverService
    },
    canLoad: [NoAuthGuard],
    canActivate: [NoAuthGuard]
  },
  {
    path: 'welcome',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/welcome-screen/welcome-screen.module').then(mod => mod.WelcomeScreenModule),
    resolve: {
      auth: AuthResolverService
    },
  },
  {
    path: 'WelcomeScreenApproved', component: WelcomeScreenApprovedComponent
  },
  {
    path: 'WelcomeScreenPending', component: WelcomeScreenPendingComponent
  },
  {
    path: 'viewer',
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/home'},
      {
        path: ':courseId',
        pathMatch: 'full',
        loadChildren: () => import('../../projects/course-viewer/src/app/course-viewer.module').then(mod => mod.CourseViewerModule),
        resolve: {
          auth: AuthResolverService
        },
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
      }
    ],
  },
  {
    path: 'search',
    pathMatch: 'full',
    loadChildren: () => import('../../projects/client-ui/src/app/modules/search/search.module').then(mod => mod.SearchModule),
    resolve: {
      auth: AuthResolverService
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
