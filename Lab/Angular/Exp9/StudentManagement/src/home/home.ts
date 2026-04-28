import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../app/student.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  studentService = inject(StudentService);
  router = inject(Router);
  students = this.studentService.students;

  viewStudent(id: number) {
    this.router.navigate(['/view-student', id]);
  }

  editStudent(id: number) {
    this.router.navigate(['/edit-student', id]);
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id);
    }
  }
}
