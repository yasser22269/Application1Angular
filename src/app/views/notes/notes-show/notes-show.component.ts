import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';
import { NotesService } from './../../../shared/services/notes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notes-show',
  templateUrl: './notes-show.component.html',
  styleUrls: ['./notes-show.component.css']
})
export class NotesShowComponent implements OnInit {

  @Input() Noteid :any;
  @Output() item = new EventEmitter<any>();
  NoteDetials :any ={};

  addForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
   });
  subbitted :boolean = false;

  constructor(
    private NotesService : NotesService,
    private Toastr : ToastrService,
    private router : Router,
    private route : ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    //  this.addForm();
    if(this.Noteid !="")
     this.getItemDetails(this.Noteid);

  }


  onSubmit(){
    this.subbitted =true;
    if(this.addForm.invalid){
      return;
    }

    if(this.Noteid ==''){
      this.postItem();
    }else{
      this.updateItem();
    }

  }
  postItem(){

    this.NotesService.add(this.addForm.value).subscribe(res=>{
      this.Toastr.success("Note Added Successfully",'success',{timeOut:3000,closeButton:true,progressBar:true});
      this.getitemsAfterUpdated();

  },err =>{
    this.Toastr.error(err.statusText,'error',{timeOut:3000,closeButton:true,progressBar:true})
  });

  }

  updateItem(){

    this.NotesService.update(this.addForm.value,this.Noteid).subscribe(res=>{
      this.Toastr.success("Note Updated Successfully",'success',{timeOut:3000,closeButton:true,progressBar:true});
        this.getitemsAfterUpdated();
  },err =>{
    this.Toastr.error(err.statusText,'error',{timeOut:3000,closeButton:true,progressBar:true});
  });

  }



  get f(){
    return this.addForm.controls;
  }

  getItemDetails(id){
    this.NotesService.getNote(id).subscribe(res=>{
      this.NoteDetials = res;
      this.addForm.patchValue({
        id:res.id,
        title:res.title,
        description:res.description,
      });
    });
  }




  getitemsAfterUpdated(){
    this.NotesService.getAll().subscribe(res=>{
      this.item.emit(res);

    })
  }
}
