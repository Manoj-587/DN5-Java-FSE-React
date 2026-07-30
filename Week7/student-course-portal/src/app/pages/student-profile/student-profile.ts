import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { forkJoin } from 'rxjs';
import { EnrollmentService } from '../../services/enrollment';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  imports: [NgFor, NgIf],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfileComponent implements OnInit {

  enrolledCourses: Course[] = [];

  constructor(
    private enrollmentService: EnrollmentService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const ids = this.enrollmentService.getEnrolledCourseIds();
    if (ids.length === 0) return;

    // Fetch each enrolled course by id in parallel, then collect results
    forkJoin(ids.map(id => this.courseService.getCourseById(id))).subscribe({
      next: (courses) => this.enrolledCourses = courses
    });
  }
}
