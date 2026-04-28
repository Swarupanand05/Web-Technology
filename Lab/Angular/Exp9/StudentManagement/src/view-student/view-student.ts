import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student, StudentService } from '../app/student.service';

@Component({
  selector: 'app-view-student',
  standalone: true,
  imports: [],
  templateUrl: './view-student.html',
})
export class ViewStudent implements OnInit {
  studentService = inject(StudentService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  student: Student | undefined;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.student = this.studentService.getStudent(id);
      if (!this.student) {
        alert('Student not found');
        this.router.navigate(['/']);
      }
    });
  }
}
