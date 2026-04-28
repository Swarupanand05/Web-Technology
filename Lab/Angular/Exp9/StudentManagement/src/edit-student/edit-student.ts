import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../app/student.service';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-student.html',
})
export class EditStudent implements OnInit {
  studentService = inject(StudentService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  id: number = 0;
  name: string = '';
  age: number | null = null;
  course: string = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      const student = this.studentService.getStudent(this.id);
      if (student) {
        this.name = student.name;
        this.age = student.age;
        this.course = student.course;
      } else {
        alert('Student not found');
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    if (this.name && this.age !== null && this.course) {
      this.studentService.updateStudent({ id: this.id, name: this.name, age: this.age, course: this.course });
      alert('Student updated successfully!');
      this.router.navigate(['/']);
    }
  }
}
