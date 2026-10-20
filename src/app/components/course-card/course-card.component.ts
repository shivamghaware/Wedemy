import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  // @Input allows the parent component to pass data down
  @Input() course!: Course;

  // @Output allows the child to emit an event back to the parent
  @Output() toggleComplete = new EventEmitter<number>();

  onToggle() {
    // Emit the course id back to the parent
    this.toggleComplete.emit(this.course.id);
  }
}
