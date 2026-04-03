import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagementComponent } from "./components/user-management/user-management.component";

@Component({
  selector: 'app-root',
  imports: [UserManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management';
  name='Anurag';

  userList=[
    {uid:1,uname:'khushboo',email:'khushboo@gmail.com', role:'student'},
    {uid:2,uname:'shivaya',email:'shiv@gmail.com', role:'student'},
    {uid:3,uname:'anurag',email:'anurag@gmail.com', role:'student'},
    {uid:4,uname:'pragya',email:'pragya@gmail.com', role:'student'},
    {uid:5,uname:'rajat',email:'rajat@gmail.com', role:'student'}
  ]
  addToUserList(user:any){
    this.userList.push(user);
  }
}
