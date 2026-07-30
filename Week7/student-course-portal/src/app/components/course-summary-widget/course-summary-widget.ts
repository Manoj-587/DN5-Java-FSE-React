import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { CourseService } from '../../services/course';

// Step 62: This component injects the SAME CourseService singleton as HomeComponent.
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

  ngOnInit(): void { this.refresh(); }

  refresh(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courseCount = courses.length;
        this.courseNames = courses.map(c => c.name);
        this.cdr.markForCheck();
      }
    });
  }

  // Step 62: POST a test course to prove singleton — uses createCourse() HTTP POST
  addTestCourse(): void {
    const next = this.courseCount + 1;
    this.courseService.createCourse({
      name: `Test Course ${next}`,
      code: `TST${next}`,
      credits: 2,
      gradeStatus: 'pending',
      enrolled: false
    }).subscribe({ next: () => this.refresh() });
  }
}
