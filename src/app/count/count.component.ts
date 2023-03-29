import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent {
  
  age: number = 1;

  Conteo(){
    console.log("un click más");
    this.age++;
    
  }
}
