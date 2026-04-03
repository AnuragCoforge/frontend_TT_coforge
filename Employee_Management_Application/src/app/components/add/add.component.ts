import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
    employee:Employee= new Employee(0, "", "", "");
    employeeList:Employee[] = []
    
    addEmployee() {
        this.employeeList.push({...this.employee});
        console.log(this.employeeList);
    }
}
