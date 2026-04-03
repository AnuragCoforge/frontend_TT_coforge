import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isLoggedIn : boolean = true;
  // isLoggedOut = true;
  
  // login() {
    
  //       this.isLoggedIn = !this.isLoggedIn;
    
  // }
    // logout() {
    // if(this.isLoggedOut === true) {
    //     this.isLoggedOut = false;
    // }
  }

