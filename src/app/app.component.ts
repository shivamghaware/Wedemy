import { Component, OnInit } from '@angular/core';
import { Course } from './models/course.model';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 16 ZTM Masterclass';
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  handleToggleComplete(courseId: number) {
    this.courseService.toggleCourseCompletion(courseId);
  }

  handleCourseCreated(courseData: { title: string; instructor: string }) {
    this.courseService.addCourse(courseData.title, courseData.instructor);
  }
}