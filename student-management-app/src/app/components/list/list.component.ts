import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  studentList:Student[] = [new Student(123, "Anurag", "Java"),
  new Student(124, "Uttu", "C++"),
  new Student(125, "Mayank", "C++"),
  new Student(126, "Sagar", "Python")]


   
deleteStudent(id:number){
const sid=Number(id)
this.studentList=this.studentList.filter(s=>s.sid!=id)
}
 
}
