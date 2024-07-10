import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ImageComponent {
  @Input() src: any;

  constructor() {
  }

}
