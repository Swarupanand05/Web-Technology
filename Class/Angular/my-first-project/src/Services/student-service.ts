import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  Students=[
    {name:'Swarupanand',age:22,course:'CE'},
    {name:'Dhiraj',age:21,course:'IT'},
    {name:'Aditya',age:20,course:'ME'}
  ];

  getStudents(){
    return this.Students;
  }
}
