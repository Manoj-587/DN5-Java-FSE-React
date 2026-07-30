import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { LoadingService } from '../../services/loading.service';

// Step 91: Global loading spinner — shown whenever any HTTP request is in-flight.
// Uses async pipe so the template subscribes/unsubscribes automatically.
@Component({
  selector: 'app-loading-spinner',
  imports: [NgIf, AsyncPipe],
  template: `
    <div class="spinner-overlay" *ngIf="loadingService.isLoading$ | async">
      <div class="spinner"></div>
    </div>
  `,
  styles: [`
    .spinner-overlay {
      position: fixed; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(255,255,255,0.6);
      z-index: 9999;
    }
    .spinner {
      width: 48px; height: 48px;
      border: 5px solid #e0e0e0;
      border-top-color: #1a237e;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class LoadingSpinnerComponent {
  constructor(public loadingService: LoadingService) {}
}
