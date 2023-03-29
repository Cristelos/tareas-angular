import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent {
  @Input() image!: any; 
  @Input() url!: string;
  @Input() alt!: string;
}
