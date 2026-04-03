import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  username="";
  password="";
  router!:Router
  

  login() {
    if(this.username === "Anurag" && this.password === "Anurag@1234"){
       alert("login-successfull");
       this.router.navigate(['/list'])
     }



      else alert("le error aa gya");
  }
}
