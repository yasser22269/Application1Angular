import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';
import { PostService } from './../../../shared/services/post.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postid;
  postDetials :any ={};

  editForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
   });
  subbitted :boolean = false;

  constructor(
    private PostService : PostService,
    private Toastr : ToastrService,
    private fb: FormBuilder ,
    private router : Router,
    private route : ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    // this.editForm();
    this.route.params.subscribe(pram=>{
      this.postid = pram.id;
      this.PostService.getPost( pram.id).subscribe(res=>{
        this.postDetials = res;

        this.editForm.patchValue({
          title:res.title,
          description:res.description,
        });
      });
    });
  }


  onSubmit(){
    this.subbitted =true;
    if(this.editForm.invalid){
      return;
    }
    this.PostService.update(this.editForm.value,this.postid).subscribe(res=>{
      this.Toastr.success("Post Updated Successfully",'success',{timeOut:3000,closeButton:true,progressBar:true});
      // this.router;
      this.location.back()
      // .navigate(["../admin/posts"])
  },err =>{
    this.Toastr.error(err.statusText,'error',{timeOut:3000,closeButton:true,progressBar:true})
  });
  }

  get f(){
    return this.editForm.controls;
  }
  // buildEditForm() {
  //   this.editForm = this.fb.group({
  //     title : [null,Validators.required],
  //     description : [null,Validators.required],
  //   })
  // }

}
