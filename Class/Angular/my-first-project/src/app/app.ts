import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './admin/admin';
import { StudentList } from '../student-list/student-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Admin,StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-project');

  name: string = 'Angular';
  number: number = 5;
  isActive:boolean = true;

  
}
