import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  courseForm: FormGroup;

  @Output() courseCreated = new EventEmitter<{ title: string; instructor: string }>();

  constructor(private fb: FormBuilder) {
    // Define form controls and validation rules
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      instructor: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      this.courseCreated.emit(this.courseForm.value);
      this.courseForm.reset(); // Clear the form after submission
    }
  }
}