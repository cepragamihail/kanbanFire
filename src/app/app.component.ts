import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Task[] = [
    { title: 'Buy milk', descritpion: 'Go to the store an buy milk' },
    { title: 'Create Kanban board', descritpion: 'Develope a kanban app' }
  ];
}
