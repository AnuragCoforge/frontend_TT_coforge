import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-add-student',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  // router: any;

  constructor(private student:StudentService, private router:Router) { }

  addStudent = new FormGroup({
    sid:new FormControl(''),
    name:new FormControl(''),
    phone:new FormControl('')
  })

  saveData() {
    // console.log(this.addStudent.value);
      this.student.saveStudent(this.addStudent.value).subscribe((data)=> {
      console.log(data)
    })
    this.router.navigate(['/list'])
  }
}
