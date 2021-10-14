import { NotesService } from './../../../shared/services/notes.service';
import {  ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  Noteid:any;
  searchText:any;

  constructor(
    private NotesService : NotesService,
    private Toastr : ToastrService,
    private modalService: NgbModal,

    ) { }


  ngOnInit(): void {
    this.getAll();

  }

  notes:any =[];

  getAll(){
    this.NotesService.getAll().subscribe(res=>{
      this.notes = res;
    })

  }

  deleteNote(id){
    if (confirm("Are you sure you want to delete this note?")) {
      this.NotesService.delete(id).subscribe(res=>{
          this.Toastr.success("note deleted Successfully",'success',{timeOut:3000,closeButton:true,progressBar:true})
          this.getAll();
      },err =>{
        this.Toastr.error(err.statusText,'error',{timeOut:3000,closeButton:true,progressBar:true})

        // console.log(err);
      });
    } else {
      this.Toastr.error("You pressed Cancel!",'',{timeOut:3000,closeButton:true,progressBar:true})
    }
  }

  open(content,id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.Noteid = id;
  }


  getUpdatedItems(Updateditems){
      // console.log(Updateditems);
      this.notes =Updateditems;

      //بتقفل كل الموديلز
      this.modalService.dismissAll();
  }

}
