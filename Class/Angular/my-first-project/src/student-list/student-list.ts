import { Component } from '@angular/core';
import { StudentService } from '../Services/student-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students:any[]=[];//any [] means it can store any 
  //any type data


  constructor(private studentService:StudentService){}


  ngOnInit(){
    this.students=this.studentService.getStudents();
    console.log(this.students);
  }
}

