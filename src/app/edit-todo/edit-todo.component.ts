import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../services/todoservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { todo } from '../model/todo';


@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  id:number;

  constructor(private activaterouter:ActivatedRoute,
    private service:TodoserviceService,private router:Router) { }
     Todo:todo={
      userId:0,
      id:0,
      title:'',
      completed:null,
     }
    

  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.params['id']
    this.service.getById(this.id).subscribe((data:any)=>{
    this.Todo=data
  })}
  update(){
    this.service.Update(this.id,this.Todo).subscribe(()=>{
      console.log("updated")
      this.router.navigateByUrl('/todo')
    })
      }

}
