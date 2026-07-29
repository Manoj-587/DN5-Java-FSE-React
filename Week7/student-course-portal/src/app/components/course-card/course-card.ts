import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {

  // Step 20: @Input course
  @Input() course!: Course;

  // Step 21: @Output enrollRequested
  @Output() enrollRequested = new EventEmitter<number>();

  // Step 18: ngOnChanges - called when any @Input property changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CourseCardComponent input changed:', changes);
  }

  // Step 21: Emit course id on enroll button click
  onEnroll(): void {
    this.enrollRequested.emit(this.course.id);
  }
}
