import { searchFilter } from './../../Pipes/search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesShowComponent } from './notes-show/notes-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotesListComponent,
    NotesShowComponent,
    searchFilter,
  ],
  exports: [searchFilter],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ]
})
export class NotesModule { }
