import { Injectable, signal } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSignal = signal<Student[]>([]);
  private nextId = 1;
  
  readonly students = this.studentsSignal.asReadonly();

  addStudent(student: Omit<Student, 'id'>) {
    const newStudent = { ...student, id: this.nextId++ };
    this.studentsSignal.update(students => [...students, newStudent]);
  }

  updateStudent(updatedStudent: Student) {
    this.studentsSignal.update(students => 
      students.map(s => s.id === updatedStudent.id ? updatedStudent : s)
    );
  }

  deleteStudent(id: number) {
    this.studentsSignal.update(students => students.filter(s => s.id !== id));
  }

  getStudent(id: number): Student | undefined {
    return this.studentsSignal().find(s => s.id === id);
  }
}
