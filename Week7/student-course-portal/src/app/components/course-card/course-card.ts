import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  imports: [NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, TitleCasePipe, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {

  // Step 20: @Input course
  @Input() course!: Course;

  // Step 37: configurable highlight color passed from parent
  @Input() highlightColor = 'lightyellow';

  // Step 21: @Output enrollRequested — kept for backward compat with CourseListComponent
  @Output() enrollRequested = new EventEmitter<number>();

  // Step 31: expand/collapse toggle
  isExpanded = false;

  // Step 65: inject EnrollmentService; Step 70: inject Router for card click navigation
  constructor(private enrollmentService: EnrollmentService, private router: Router) {}

  // Step 18: ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CourseCardComponent input changed:', changes);
  }

  // Step 65: toggle enroll/unenroll via EnrollmentService
  onEnroll(): void {
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
    // Also emit for parent (CourseListComponent selectedCourseId — Hands-On 2)
    this.enrollRequested.emit(this.course.id);
  }

  // Step 65: used in template to toggle button label Enroll ↔ Unenroll
  isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  // Step 70: navigate to /courses/:id when card is clicked
  goToDetail(): void {
    this.router.navigate(['courses', this.course.id]);
  }

  // Step 31: toggle expanded state
  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Step 32: getter keeps templates cleaner and improves readability
  // by centralising all class logic in one place instead of inline expressions.
  get cardClasses(): Record<string, boolean> {
    return {
      'card--enrolled': this.isEnrolled(),                  // Step 29 + 65
      'card--full':     (this.course?.credits ?? 0) >= 4,   // Step 29
      'expanded':       this.isExpanded                      // Step 31
    };
  }

  // Step 30: border color based on gradeStatus
  get borderStyle(): Record<string, string> {
    const colors: Record<string, string> = {
      passed:  'green',
      failed:  'red',
      pending: 'grey'
    };
    return { 'border-left': `4px solid ${colors[this.course?.gradeStatus] ?? 'grey'}` };
  }
}
