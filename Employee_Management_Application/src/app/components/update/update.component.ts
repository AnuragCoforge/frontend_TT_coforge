import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  constructor(private fb:FormBuilder, private router:Router){}
  updateEmp!:Employee
  employeeForm!:FormGroup
  employeeList:Employee[] = [
    new Employee(123, "Anurag", "Java", "1234236543"),
    new Employee(124, "Uttu", "C++","1234236543"),
    new Employee(125, "Mayank", "C++", "1234236543"),
    new Employee(126, "Sagar", "Python", "1234236543")
  ];

    ngOnInit(): void {
    
this.employeeForm = this.fb.group({
    empid: [''],
    empname: ['', [Validators.required, Validators.minLength(3)]],
    emptech: ['', Validators.required],
    empphone: ['', [Validators.required, Validators.minLength(10)]]
  });

  }

  

  getEmployeeById(empid:string) {
    const id = Number(empid);
    const stud = this.employeeList.find(emp=>emp.empid===id);
    if(stud) {
      this.updateEmp = stud
      console.log(this.employeeList)
      this.employeeForm.patchValue(this.updateEmp)
    }
    else {
      alert("no employee with this id")
    }
  }

  updateEmployee() {
    const empl = this.employeeForm.value; //fetching the object 'employee' from the update Form
    const id = this.employeeList.findIndex(e => e.empid === empl.empid); //fixing the sid 
    this.employeeList[id] = ({...empl})
    console.log(this.employeeList)
    this.router.navigate(['/list'])
  }

}
