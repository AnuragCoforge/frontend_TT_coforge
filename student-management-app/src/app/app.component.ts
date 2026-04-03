import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './components/home/home.component';
import { RouterOutlet } from '@angular/router';
// import { CommonModule, NgForOf } from "../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CommonModule, ListComponent, AddComponent, UpdateComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-management-app';
  // showLogin= true;

  // logoutFxButton() {
  //   this.showLogin = false;
  // }
  names = ["anurag", "uttu", "mayak", "sagar"];
  student = [
    {
      id:1,
      name:"Anurag",
      course:"Physics"
    },
    {
       id:2,
      name:"Khushboo",
      course:"Maths"
    },
    {
       id:3,
      name:"Shivaya",
      course:"Commerse"
    },
     {
       id:4,
      name:"Pragya",
      course:"English"
    }
  ]
}
