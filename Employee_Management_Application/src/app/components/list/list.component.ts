import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  employeeList:Employee[] = [new Employee(186, "Anurag", "Java", "1234567890"),
  new Employee(187, "Uttu", "C++", "0987654321"),
  new Employee(188, "Mayank", "C++", "1123342354"),
  new Employee(189, "Sagar", "Python", "7656798755")]


   
deleteEmployee(id:number){
  const sid=Number(id)
  this.employeeList=this.employeeList.filter(emp=>emp.empid!=id)
  }
}
