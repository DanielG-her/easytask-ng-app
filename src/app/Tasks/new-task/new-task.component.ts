import {
  Component,
  Output,
  EventEmitter,
  output,
  inject,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../Tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();
  onCancel() {
    this.cancel.emit();
  }
  private tasksService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.cancel.emit();
  }
}
