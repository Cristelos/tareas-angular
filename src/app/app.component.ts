import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'card';

  todoList = [
    {
      name: "Aprender Angular",
      isDone: false
    },
    {
      name: "Aprender JS",
      isDone: true
    }, 
    {
      name: "Encontrar un trabajo",
      isDone: false
    }
    
  ]

}
