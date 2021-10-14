import {  ToastrService } from 'ngx-toastr';
import { PostService } from './../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  searchText;
  constructor(
    private PostService : PostService,
    private Toastr : ToastrService,


    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  posts:any =[];

  getAll(){
    this.PostService.getAll().subscribe(res=>{
      this.posts = res;
    })

  }

  deletePost(id){
    if (confirm("Are you sure you want to delete this post?")) {
      this.PostService.delete(id).subscribe(res=>{
          this.Toastr.success("Post deleted Successfully",'success',{timeOut:3000,closeButton:true,progressBar:true})
          this.getAll();
      },err =>{
        this.Toastr.error(err.statusText,'error',{timeOut:3000,closeButton:true,progressBar:true})

        // console.log(err);
      });
    } else {
      this.Toastr.error("You pressed Cancel!",'',{timeOut:3000,closeButton:true,progressBar:true})
    }
  }



}
