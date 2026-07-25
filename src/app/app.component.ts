import { Component } from '@angular/core';
import { ToDo } from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    newToDo: ToDo = new ToDo()
    todos: ToDo[] = []

    markDonecss(todo: ToDo){
      return todo.done ? "greenstyle" : ""
    }

    markTodoAsDone(todo: ToDo): void{
        todo.done = true
    }

    formatDate(date: Date){
      return date.getHours() + ":" + date.getMinutes()
    }

    add(){
      this.todos.push({...this.newToDo})
    }
}
 