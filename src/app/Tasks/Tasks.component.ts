import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksService } from './Tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './Tasks.component.html',
  styleUrl: './Tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
  // onCompleteTask(id: string) {
  //   return this.taskService.removeTask(id);
  // }
  newTask: boolean = false;
  showNewTask() {
    this.newTask = true;
  }
  onCancelAddTask() {
    this.newTask = false;
  }
  // onAddTask(taskData: NewTaskData) {
  //   return this.taskService.addTask(taskData, this.userId);
  //   this.newTask = false;
  // }
}
