import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CourseService } from '../../services/course';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  imports: [FormsModule, NgIf, CourseSummaryWidgetComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  portalName    = 'Student Course Portal';
  isPortalActive = true;
  message       = '';
  searchTerm    = '';
  courseCount   = 0;

  private destroy$ = new Subject<void>();

  constructor(private courseService: CourseService) {}

  onEnrollClick(): void { this.message = 'Enrollment opened!'; }

  ngOnInit(): void {
    console.log('HomeComponent initialized');
    // Step 61 + 80: subscribe to Observable getCourses() for live count
    this.courseService.getCourses()
      .pipe(takeUntil(this.destroy$))
      .subscribe({ next: (courses) => this.courseCount = courses.length });
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
    this.destroy$.next();
    this.destroy$.complete();
  }
}
