export interface Task {
  title: string;
  id: string;
  summary: string;
  userId: string;
  dueDate: string;
}
export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
