import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{

  constructor(private fb:FormBuilder, private router:Router){}
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
  }

  

  getStudentById(sid:string) {
    const id = Number(sid);
    const stud = this.studentList.find(s=>s.sid===id);
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
    const id = this.studentList.findIndex(s => s.sid === stud.sid); //fixing the sid 
    this.studentList[id] = ({...stud})
    console.log(this.studentList)
    this.router.navigate(['/list'])
  }

}
