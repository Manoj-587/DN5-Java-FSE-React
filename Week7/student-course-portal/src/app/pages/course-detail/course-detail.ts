import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

// Step 69 + 79: CourseDetailComponent — fetches course via HTTP Observable
@Component({
  selector: 'app-course-detail',
  imports: [NgIf, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetailComponent implements OnInit {

  course: Course | undefined;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe({
      next: (c) => this.course = c,
      error: () => this.errorMessage = 'Course not found.'
    });
  }
}
