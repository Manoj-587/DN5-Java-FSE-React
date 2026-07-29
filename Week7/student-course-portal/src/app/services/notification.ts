import { Injectable } from '@angular/core';

// Step 67: NotificationService is NOT providedIn:'root'.
// It is provided in the NotificationComponent's providers array, which means
// each NotificationComponent instance gets its OWN separate service instance
// (component-level scope), unlike root-level singletons.
@Injectable()
export class NotificationService {

  private messages: string[] = [];

  addMessage(msg: string): void {
    this.messages.push(msg);
  }

  getMessages(): string[] {
    return this.messages;
  }

  clear(): void {
    this.messages = [];
  }
}
