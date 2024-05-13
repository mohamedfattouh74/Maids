import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl:string='https://reqres.in/api'
  constructor(private http:HttpClient) {}


  getUsers(pageNumber : number){
    return this.http.get(`${this.baseUrl}/users?page=${pageNumber}`);
  }

  getUserByID(id:string|null){
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

}
