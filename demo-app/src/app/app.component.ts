import { Component } from '@angular/core';
import { Databinding } from './components/databinding/databinding';
import { Demo } from './components/demo/demo';

@Component({
  selector: 'app-root',
  imports: [Databinding, Demo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
  myName = 'Anurag';
}


