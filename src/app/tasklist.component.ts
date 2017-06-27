import { Component } from '@angular/core';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  tasks: string[] = ['Task 2243423', 'Task 2', 'Task 3'];
}
