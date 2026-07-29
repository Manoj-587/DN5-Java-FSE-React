import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  imports: [NgFor, NgIf, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  // Step 25: loading flag
  isLoading = true;

  // Step 60: populated from CourseService — hardcoded array removed
  courses: Course[] = [];

  // Step 23: selectedCourseId
  selectedCourseId: number | null = null;

  // Step 60: inject CourseService; keep ChangeDetectorRef for zoneless CD fix
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('CourseList ngOnInit');
    console.log('Before timeout', this.isLoading);

    // Step 60: load courses from the shared service
    this.courses = this.courseService.getCourses();

    // Step 25: hide loading after 1.5 seconds; markForCheck required in zoneless Angular 22
    setTimeout(() => {
      this.isLoading = false;
      console.log('After timeout', this.isLoading);
      this.cdr.markForCheck();
    }, 1500);
  }

  // Step 23: onEnroll handler — receives courseId emitted by CourseCardComponent
  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }

  // Step 26: trackBy improves performance by preventing unnecessary DOM re-rendering
  // when the courses array changes — Angular reuses existing DOM nodes instead of recreating them.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
