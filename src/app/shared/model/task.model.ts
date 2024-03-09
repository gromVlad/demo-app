export interface TaskInterface {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  priority: 1 | 2 | 3;
  status: 'new' | 'in progress' | 'completed';
  performers: string[];
}
