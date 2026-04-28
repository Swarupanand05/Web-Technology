import { Injectable, signal } from '@angular/core';

export interface Student {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSignal = signal<Student[]>([]);
  
  readonly students = this.studentsSignal.asReadonly();

  addStudent(student: Student) {
    this.studentsSignal.update(students => [...students, student]);
  }
}
