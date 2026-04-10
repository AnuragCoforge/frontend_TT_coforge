import { Component, OnInit } from '@angular/core';

import { StudentService } from '../../service/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-student',
  imports: [CommonModule],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit{
  constructor(private student:StudentService) { }
  studentData: any =[] ;
  ngOnInit(): void {
    
    this.student.getAllStudents().subscribe((data)=>{
      console.log(data);
      this.studentData = data;
    })
  }

}
