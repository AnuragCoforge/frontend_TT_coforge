import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{

  constructor(private fb:FormBuilder, private router:Router, private service:StudentService){}
  updateStud!:Student
  studentForm!:FormGroup
  studentList:Student[] = [
    new Student(123, "Anurag", "Java"),
    new Student(124, "Uttu", "C++"),
    new Student(125, "Mayank", "C++"),
    new Student(126, "Sagar", "Python")
  ];

    ngOnInit(): void {
    this.studentForm = this.fb.group({
      sid:[''],
      sname:['', [Validators.required,Validators.minLength(3)]],
      course:['', Validators.required]
    })
    this.id = Number(this.router.snapshot.paramMap.get("id"));
    this.service.getStudentById(this.id).subs
  }

  

  getStudentById(sid:string) {
    const id = Number(sid);
    let stud:Student;
    const stud = this.service.getStudentById(id)
    if(stud) {
      this.updateStud = stud
      console.log(this.studentList)
      this.studentForm.patchValue(this.updateStud)
    }
    else {
      alert("no student with this id")
    }
  }

  updateStudent() {
    const stud = this.studentForm.value; //fetching the object 'student' from the update Form
    const id = this.studentList.findIndex(s => s.id === stud.id); //fixing the sid 
    this.studentList[id] = ({...stud})
    console.log(this.studentList)
    this.router.navigate(['/list'])
  }

}
