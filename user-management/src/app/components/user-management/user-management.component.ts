import { AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-management',
  imports: [CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements
OnChanges,
OnInit,
DoCheck,
AfterViewInit,
AfterViewChecked,
OnDestroy
{


  @Input() myname!:string;
  @Input() userList!:User[]
  @Output() addUserEvent = new EventEmitter<any>();

  constructor() {
    console.log("1.constructor called");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("2.ngOnChanges called",changes);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("3.ngOnInit called");
    this.listUsers();
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log("4.ngDoCheck called");
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log("5.ngAfterViewInit called");
  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    console.log("6.nfAfterViewChecked called");
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log("7.ngOnDestroy called");
  }

  listUsers(){

  // this.userList=[
  //   {uid:1,uname:'khushboo',email:'khushboo@gmail.com', role:'student'},
  //   {uid:2,uname:'shivaya',email:'shiv@gmail.com', role:'student'},
  //   {uid:3,uname:'anurag',email:'anurag@gmail.com', role:'student'},
  //   {uid:4,uname:'pragya',email:'pragya@gmail.com', role:'student'},
  //   {uid:5,uname:'rajat',email:'rajat@gmail.com', role:'student'}
  // ]
}

addUser() {
  const user = {uid:234, uname:'sagar', email:'sagar@gmail.com', role:'bench'};
  this.addUserEvent.emit(user);
}

  }

