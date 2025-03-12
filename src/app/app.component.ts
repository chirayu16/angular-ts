import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrayObjectsComponent } from './array-objects/array-objects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArrayObjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ts';
}
