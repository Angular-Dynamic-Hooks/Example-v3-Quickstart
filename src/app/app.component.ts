import { Component } from '@angular/core';
import { DynamicHooksComponent } from 'ngx-dynamic-hooks'; 
import { ExampleComponent } from './components/example/example.component';
import { ImageComponent } from './components/image/image.component';
import { BoxComponent } from './components/box/box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicHooksComponent, ExampleComponent, ImageComponent, BoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // A list of components to look for
  components = [ExampleComponent, ImageComponent, BoxComponent]

  // The content to parse
  content = `
    <p>Let's load a component here: <app-example></app-example></p>
    <p>How about a component for an image:</p>
    <app-image [src]="'https://i.imgur.com/3Hvh6lx.jpg'"></app-image>
    <p>or a text-box:</p>
    <app-box [backgroundColor]="'#4493ff40'">
      with projected content!
    </app-box>
  `;
}
