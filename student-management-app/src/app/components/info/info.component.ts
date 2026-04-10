import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{
  id:Number | undefined
  stud:Student | undefined
  constructor(private service:StudentService, private route:ActivatedRoute){}
    ngOnInit(): void {
      this.id = Number(this.route.snapshot.paramMap.get('id'))
      this.service.getStudentById(this.id).subscribe((data)=>this.stud=data)
    }

    // getStudentById(id:Number) {

    // }
}
