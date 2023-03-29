import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-precio',
  templateUrl: './precio.component.html',
  styleUrls: ['./precio.component.scss']
})
export class PrecioComponent {
  @Input() precio!: any;
}
