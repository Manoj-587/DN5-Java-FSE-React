import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { Student } from '../../models/student.model';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-list',
  imports: [NgFor, NgIf, FormsModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit, OnDestroy {

  isLoading = true;
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  selectedCourseId: number | null = null;
  errorMessage = '';

  // Step 87: students enrolled in the currently selected course
  enrolledStudents: Student[] = [];

  // Step 71: search term bound to input; also reflected in URL query param
  searchTerm = '';

  // Step 87: Subject used to feed courseId$ stream for switchMap
  private courseSelected$ = new Subject<number>();
  // Used for clean unsubscription on destroy
  private destroy$ = new Subject<void>();

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Step 71: pre-populate search from URL query param on load
    const qSearch = this.route.snapshot.queryParamMap.get('search');
    if (qSearch) this.searchTerm = qSearch;

    // Step 80: subscribe with next / error / complete
    this.courseService.getCourses()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.courses = data;
          this.applyFilter();
        },
        error: (err: Error) => {
          // Step 84: display friendly error message in the UI
          this.errorMessage = err.message;
          this.isLoading = false;
          this.cdr.markForCheck();
        },
        complete: () => {
          // Step 80: set isLoading=false inside complete
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });

    // Step 87: switchMap — when a new course is selected, cancel the previous
    // student-load request and start a fresh one for the new courseId.
    // switchMap cancels previous in-flight requests automatically.
    this.courseSelected$.pipe(
      switchMap(courseId => this.enrollmentService.getStudentsByCourse(courseId)),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (students) => {
        this.enrolledStudents = students;
        this.cdr.markForCheck();
      },
      error: () => { this.enrolledStudents = []; }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Step 71: update URL with ?search=... and filter list
  onSearch(): void {
    this.router.navigate(['courses'], {
      queryParams: this.searchTerm ? { search: this.searchTerm } : {}
    });
    this.applyFilter();
  }

  private applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCourses = term
      ? this.courses.filter(c =>
          c.name.toLowerCase().includes(term) || c.code.toLowerCase().includes(term))
      : [...this.courses];
  }

  // Step 87: called when a card emits enrollRequested — feeds the switchMap stream
  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
    this.courseSelected$.next(courseId);
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
