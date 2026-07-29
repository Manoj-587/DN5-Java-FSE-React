import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [NgFor, NgIf, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  // Step 25: loading flag
  isLoading = true;

  // Step 22 + Step 27: Five hardcoded courses with gradeStatus and enrolled
  courses: Course[] = [
    { id: 1, name: 'Angular Fundamentals', code: 'ANG101', credits: 3, gradeStatus: 'passed',  enrolled: true  },
    { id: 2, name: 'Spring Boot Basics',   code: 'SPR201', credits: 4, gradeStatus: 'failed',  enrolled: false },
    { id: 3, name: 'Data Structures',      code: 'DSA301', credits: 3, gradeStatus: 'pending', enrolled: true  },
    { id: 4, name: 'Database Management',  code: 'DBM401', credits: 3, gradeStatus: 'passed',  enrolled: false },
    { id: 5, name: 'Cloud Computing',      code: 'CLD501', credits: 4, gradeStatus: 'pending', enrolled: true  }
  ];

  // Step 23: selectedCourseId
  selectedCourseId: number | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('CourseList ngOnInit');
    console.log('Before timeout', this.isLoading);

    // Step 25: hide loading after 1.5 seconds
    // ChangeDetectorRef.markForCheck() is required in Angular 22 (zoneless) because
    // setTimeout runs outside Angular's change detection — without this call the view never updates.
    setTimeout(() => {
      this.isLoading = false;
      console.log('After timeout', this.isLoading);
      this.cdr.markForCheck();
    }, 1500);
  }

  // Step 23: onEnroll handler
  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }

  // Step 26: trackBy improves performance by preventing unnecessary DOM re-rendering
  // when the courses array changes — Angular reuses existing DOM nodes instead of recreating them.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
