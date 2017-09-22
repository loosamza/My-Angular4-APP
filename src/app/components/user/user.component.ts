import {
  Component,
  OnInit
} from '@angular/core';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   name: string;
   age: number;
   email: string;
   isEditable:boolean = true;
  // dictionary
   address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }
  // array
   skills: string[];
   todoList:Todo[];

  constructor(private todoService : TodoService ) {
    
    

  }

  ngOnInit() {
    this.name = 'Piyapat Plydaung III'
    this.age = 23
    this.email = 'piyapat_sam_@hotmail.com'

    this.address = {
      street: "27 Sirithon5 ",
      city: "BangPlat",
      province: "BKK",
      postcode: "10070"
    }

    this.skills = ["Programming", "Pingpong", "Soccer"];

    // Call Service

    this.todoService.getTodoList().subscribe((response)=>{
        this.todoList = response;
    })
  }

  
  



  addSkill(skill) {
    this.skills.unshift(skill)
    return false;
  }

  delSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }
  toggleEdit(){
    this.isEditable = !this.isEditable;
  }
}


interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}