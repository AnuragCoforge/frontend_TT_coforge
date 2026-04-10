import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
// import { Student } from '../../models/student';

@Component({
  selector: 'app-add',
  imports: [FormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  student:Student= new Student(0, "", "");
    studentList:Student[] = []
    
    constructor(private router:Router, private service:StudentService) {}

    addStudent() {
        this.service.addStudent(this.student).subscribe((data)=>console.log(data));
        this.router.navigate(['/list'])
    }
}
