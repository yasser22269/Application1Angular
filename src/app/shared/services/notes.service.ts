import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http : HttpClient) { }

   link = environment.apiUrl + "/notes";

  getAll(){
    return this.http.get(`${environment.apiUrl}/notes `);
  }
  delete(id){
    return this.http.delete(`${environment.apiUrl}/notes/${id} `);
  }

  add(data){
    return this.http.post(`${environment.apiUrl}/notes`,data);
  }
  getNote(id){
    return this.http.get<any>(`${environment.apiUrl}/notes/${id}`);
  }

  update(data,id){
    return this.http.put(`${environment.apiUrl}/notes/${id}`,data);
  }

}
