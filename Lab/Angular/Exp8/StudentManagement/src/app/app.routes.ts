import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { AddStudent } from '../add-student/add-student';
import { StudentList } from '../student-list/student-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'add-student', component: AddStudent },
  { path: 'student-list', component: StudentList }
];
