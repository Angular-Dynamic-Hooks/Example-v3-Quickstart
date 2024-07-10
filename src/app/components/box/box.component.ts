import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  standalone: true
})
export class BoxComponent {
  @Input() backgroundColor: string = '';

  constructor() {
  }
}
