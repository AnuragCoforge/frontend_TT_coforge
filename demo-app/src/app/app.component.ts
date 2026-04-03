import { Component } from '@angular/core';
import { Databinding } from './components/databinding/databinding';

@Component({
  selector: 'app-root',
  imports: [Databinding],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
  myName = 'Anurag';
}


