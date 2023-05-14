import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo } from '../model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http:HttpClient) { }
  
  getAll():Observable<todo[]>{
    return this.http.get<todo[]>('http://localhost:3000/todos')
  }

  addtodo(todo:todo):Observable<todo>{
    return this.http.post<todo>('http://localhost:3000/todos',todo)
  }

  getById(id:number):Observable<todo>{
    return this.http.get<todo>('http://localhost:3000/todos'+'/'+id)
  }

  Update(id:number,todo:todo):Observable<todo>{
    return this.http.put<todo>('http://localhost:3000/todos'+'/'+id,todo)
  }
  delete(id:number):Observable<void>{
   return this.http.delete<void>('http://localhost:3000/todos'+'/'+id)
  }
}
