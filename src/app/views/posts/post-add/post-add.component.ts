import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';
import { PostService } from './../../../shared/services/post.service';
@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
   addForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
   });
  subbitted :boolean = false;
  constructor(
    private PostService : PostService,
    private Toastr : ToastrService,
    private fb: FormBuilder ,
    private router : Router,
  ) { }

  ngOnInit(): void {
    // this.buildAddForm();
  }

  onSubmit(){
    this.subbitted =true;
    if(this.addForm.invalid){
      return;
    }
    this.PostService.add(this.addForm.value).subscribe(res=>{
      this.Toastr.success("Post Added Successfully",'success',{timeOut:3000,closeButton:true,progressBar:true});
      this.router.navigate(["../admin/posts"]);
  },err =>{
    this.Toastr.error(err.statusText,'error',{timeOut:3000,closeButton:true,progressBar:true})
  });
  }

  get f(){
    return this.addForm.controls;
  }
  // buildAddForm() {
  //   this.addForm = this.fb.group({
  //     title : [null,Validators.required],
  //     description : [null,Validators.required],
  //   })
  // }
}
