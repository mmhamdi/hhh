import { Component, OnInit } from '@angular/core';
import{todo} from '../model/todo';
import { CalculService } from '../services/calcul.service';
import { TodoserviceService } from '../services/todoservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todolist:todo[]=[]
  completed:number;
  uncompleted:number;
  constructor(private calculService:CalculService , private service:TodoserviceService) { }

  ngOnInit(): void {

    this.service.getAll().subscribe((d:any)=>this.todolist=d)
  }

  getnbrcompleted(){
    this.completed=this.calculService.getNumberOf(this.todolist,"completed",true)

  }
  getnbruncompleted(){
    this.uncompleted=this.calculService.getNumberOf(this.todolist,"completed",false)
  }
  delete(id:number){
    this.service.delete(id).subscribe((d:any)=>{
      console.log(d)
      this.service.getAll().subscribe((d:any)=>this.todolist=d)})
  }


}
