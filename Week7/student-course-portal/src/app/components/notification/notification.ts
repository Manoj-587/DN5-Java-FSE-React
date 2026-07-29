import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NotificationService } from '../../services/notification';

// Step 67: providers: [NotificationService] creates a NEW instance of NotificationService
// scoped to THIS component only. This is different from providedIn:'root' which creates
// a single shared instance. Each NotificationComponent gets its own isolated service instance,
// so messages in one component do NOT appear in another NotificationComponent.
@Component({
  selector: 'app-notification',
  imports: [NgFor],
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent {

  constructor(public notificationService: NotificationService) {}

  addMessage(): void {
    this.notificationService.addMessage(`Notification at ${new Date().toLocaleTimeString()}`);
  }

  clear(): void {
    this.notificationService.clear();
  }
}
