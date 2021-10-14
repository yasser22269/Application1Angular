import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostShowComponent } from './post-show/post-show.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostAddComponent } from './post-add/post-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostsComponent,
    PostShowComponent,
    PostEditComponent,
    PostAddComponent,

  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ]
})
export class PostsModule { }
