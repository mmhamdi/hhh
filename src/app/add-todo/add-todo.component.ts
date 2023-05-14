import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../services/todoservice.service';
import { Router } from '@angular/router';
import { todo } from '../model/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo!:todo;

  constructor(private service:TodoserviceService,private router:Router) { }

  ngOnInit(): void {
    this.todo  = new todo();
  }
  add(){
    this.service.addtodo(this.todo).subscribe(()=>{
      console.log('created')
  this.router.navigateByUrl('/todo')
    }
    )
      console.log(JSON.stringify(this.todo))
    }

}
