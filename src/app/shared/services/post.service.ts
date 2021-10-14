import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  // HttpOptions = {
  //   headers : new HttpHeaders({
  //     "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2MzQwNjgyMjEsImV4cCI6MTYzNDA3MTgyMX0.2qwEtwPCWHiwWrPQuzm8PxKUURVAfrSrmV4-1tXku9k",
  //   })
  // }
  constructor(private http : HttpClient) { }

   link = environment.apiUrl + "/posts";

  getAll(){
    return this.http.get(`${environment.apiUrl}/posts `);
  }
  delete(id){
    return this.http.delete(`${environment.apiUrl}/posts/${id} `);
  }

  add(data){
    return this.http.post(`${environment.apiUrl}/posts`,data);
  }
  getPost(id){
    return this.http.get<any>(`${environment.apiUrl}/posts/${id}`);
  }

  update(data,id){
    return this.http.put(`${environment.apiUrl}/posts/${id}`,data);
  }


}
