import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  template: ``,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'default';
  titulo2 = 'hola';
}
