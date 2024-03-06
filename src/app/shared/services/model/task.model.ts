export interface TaskInterface {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  priority: number;
  status: string;
  performers: string[];
}
