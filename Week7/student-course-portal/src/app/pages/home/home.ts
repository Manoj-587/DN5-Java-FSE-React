import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CourseService } from '../../services/course';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  imports: [FormsModule, NgIf, CourseSummaryWidgetComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  // Interpolation (Step 11)
  portalName = 'Student Course Portal';

  // Property Binding (Step 12)
  // Property Binding: binds a component property to an HTML element attribute/property using [property]="value"
  isPortalActive = true;

  // Event Binding (Step 13)
  message = '';

  // Two-way Binding (Step 14)
  // Two-way Binding: combines property and event binding using [(ngModel)] to keep the view and model in sync
  searchTerm = '';

  // Step 61: live course count from CourseService
  courseCount = 0;

  // Step 61: inject CourseService
  constructor(private courseService: CourseService) {}

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  ngOnInit(): void {
    // Step 16: ngOnInit - called once after the component's inputs are initialized
    console.log('HomeComponent initialized');
    // Step 61: get live count from the shared service
    this.courseCount = this.courseService.getCourses().length;
  }

  ngOnDestroy(): void {
    // Step 17: ngOnDestroy - called just before Angular destroys the component; used for cleanup
    console.log('HomeComponent destroyed');
  }
}
