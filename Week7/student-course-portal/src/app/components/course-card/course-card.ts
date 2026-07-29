import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, TitleCasePipe } from '@angular/common';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';

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

  // Step 21: @Output enrollRequested
  @Output() enrollRequested = new EventEmitter<number>();

  // Step 31: expand/collapse toggle
  isExpanded = false;

  // Step 18: ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CourseCardComponent input changed:', changes);
  }

  // Step 21: emit course id
  onEnroll(): void {
    this.enrollRequested.emit(this.course.id);
  }

  // Step 31: toggle expanded state
  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Step 32: getter keeps templates cleaner and improves readability
  // by centralising all class logic in one place instead of inline expressions.
  get cardClasses(): Record<string, boolean> {
    return {
      'card--enrolled': !!this.course?.enrolled,      // Step 29
      'card--full':     (this.course?.credits ?? 0) >= 4, // Step 29
      'expanded':       this.isExpanded                   // Step 31
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
