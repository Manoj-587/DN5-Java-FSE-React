import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

// Step 62: This component injects the SAME CourseService singleton as HomeComponent.
// Because CourseService is providedIn:'root', Angular creates only one instance for the
// entire application. Any mutation (e.g. addCourse) is immediately visible to all
// components that share this service.
@Component({
  selector: 'app-course-summary-widget',
  imports: [NgFor],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidgetComponent implements OnInit {

  courseCount = 0;
  courseNames: string[] = [];

  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    const courses = this.courseService.getCourses();
    this.courseCount = courses.length;
    this.courseNames = courses.map(c => c.name);
  }

  // Step 62: adds a temporary course to prove singleton — HomeComponent stat updates too
  addTestCourse(): void {
    const next = this.courseService.getCourses().length + 1;
    const testCourse: Course = {
      id: next + 100,
      name: `Test Course ${next}`,
      code: `TST${next}`,
      credits: 2,
      gradeStatus: 'pending',
      enrolled: false
    };
    this.courseService.addCourse(testCourse);
    this.refresh();
    this.cdr.markForCheck();
  }
}
