import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
// import { Student } from '../../models/student';

@Component({
  selector: 'app-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  student:Student= new Student(0, "", "");
    studentList:Student[] = []
    
    addStudent() {
        this.studentList.push({...this.student});
    }
}
