import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { AddStudent } from '../add-student/add-student';
import { StudentList } from '../student-list/student-list';
import { EditStudent } from '../edit-student/edit-student';
import { ViewStudent } from '../view-student/view-student';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'add-student', component: AddStudent },
  { path: 'student-list', component: StudentList },
  { path: 'edit-student/:id', component: EditStudent },
  { path: 'view-student/:id', component: ViewStudent }
];
