import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
   component: BlankLayoutComponent,
   children: [
     {
       path: '',
       loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule),
     }
    ]
  },
  { path: 'auth',
   component: AuthLayoutComponent,
   children: [
    {
      path: '',
      loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
    },
    {
      path: 'login',
      loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
    }, {
      path: 'sign-up',
      loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
    }
   ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () => import('./views/posts/posts.module').then(m => m.PostsModule),
      }
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [

      {
        path: 'notes',
        loadChildren: () => import('./views/notes/notes.module').then(m => m.NotesModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
