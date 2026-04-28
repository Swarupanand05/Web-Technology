import { Component, inject } from '@angular/core';
import { StudentService } from '../app/student.service';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  studentService = inject(StudentService);
  students = this.studentService.students;

  // For Interpolation Example
  title = 'Student List';

  // For Event Binding Example
  viewStudent(student: any) {
    alert(`Event Binding Example:\nYou clicked on ${student.name}, Age: ${student.age}`);
  }
}
