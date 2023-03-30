import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {
  @Input() todo!: any;

  cambiaDone(item: any) {
    item.isDone = !item.isDone
  }
}
