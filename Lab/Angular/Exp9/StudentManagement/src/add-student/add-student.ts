import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../app/student.service';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
  studentService = inject(StudentService);

  name = '';
  age: number | null = null;
  course = '';

  onSubmit() {
    if (this.name && this.age && this.course) {
      this.studentService.addStudent({ name: this.name, age: this.age, course: this.course });
      alert('Student added successfully!');
      this.name = '';
      this.age = null;
      this.course = '';
    }
  }
}
