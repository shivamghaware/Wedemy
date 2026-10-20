export interface Course {
  id: number;
  title: string;
  instructor: string;
  isCompleted: boolean;
  enrollmentDate?: Date; // Add date field
}