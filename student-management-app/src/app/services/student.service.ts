import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
const baseurl = "http://localhost:4000/students/"
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllStudents():Observable<any> { //the method which is calling this the return type is observable..........
    return this.http.get(baseurl)
  }
  addStudent(student:Student):Observable<Student | any> {
    return this.http.post(baseurl, student)
  }
  getStudentById(id:number):Observable<Student | any> {
    return this.http.get(baseurl+"/"+id);
  }
}
