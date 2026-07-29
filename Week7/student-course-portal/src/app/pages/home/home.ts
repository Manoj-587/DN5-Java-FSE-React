import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, NgIf],
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

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  ngOnInit(): void {
    // Step 16: ngOnInit - called once after the component's inputs are initialized
    console.log('HomeComponent initialized');
  }

  ngOnDestroy(): void {
    // Step 17: ngOnDestroy - called just before Angular destroys the component; used for cleanup
    console.log('HomeComponent destroyed');
  }
}
