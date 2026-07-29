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


    formatDate(date: Date){
      return date.getHours() + ":" + date.getMinutes()
    }

    add(){
     
      if(this.newToDo.name.startsWith ("!"))
        this.newToDo.prio = true
        
      
       this.todos.push({...this.newToDo})
      this.newToDo.name = ""
    }

    markedTodo(todo: ToDo){
      todo.doneTodo = !todo.doneTodo
    }
    finishedTodo(){
      return this.todos.filter(x => x.doneTodo).length
    }
}
 