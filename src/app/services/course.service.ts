import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, title: 'Complete Angular Developer', instructor: 'Luis & Andrei', isCompleted: false, enrollmentDate: new Date('2026-01-15') },
    { id: 2, title: 'TypeScript Deep Dive', instructor: 'Andrei Neagoie', isCompleted: true, enrollmentDate: new Date('2026-02-10') },
    { id: 3, title: 'RxJS & State Management', instructor: 'ZTM Team', isCompleted: false, enrollmentDate: new Date('2026-03-01') }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  toggleCourseCompletion(courseId: number): void {
    const course = this.courses.find(c => c.id === courseId);
    if (course) {
      course.isCompleted = !course.isCompleted;
    }
  }

  // Add a new course
  addCourse(title: string, instructor: string): void {
    const newCourse: Course = {
      id: this.courses.length + 1,
      title,
      instructor,
      isCompleted: false,
      enrollmentDate: new Date()
    };
    this.courses.push(newCourse);
  }
}