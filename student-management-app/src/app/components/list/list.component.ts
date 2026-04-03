import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  studentList:Student[] = []

  constructor(private service:StudentService) {}

    ngOnInit(): void {
    this.service.getAllStudents()
    .subscribe((data)=> {console.log(data)
    this.studentList=data})
  }

   
deleteStudent(id:number){
// const sid=Number(id)
// this.studentList=this.studentList.filter(s=>s.id!=id)
}
 
}
