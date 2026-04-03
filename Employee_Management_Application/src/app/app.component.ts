import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent, FooterComponent, ListComponent, AddComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee_Management_Application';
}
