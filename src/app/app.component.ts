import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HRIS';

  showUsers: boolean = false;
  showLeaveTypes: boolean = false;
  showLeaveStatus: boolean = false;

  onClickUsers(): void {
    this.showUsers = true;
    this.showLeaveTypes = false;
    this.showLeaveStatus = false;
  }

  onClickLeaveTypes(): void {
    this.showLeaveTypes = true;
    this.showUsers = false;
    this.showLeaveStatus = false;
  }

  onClickLeaveStatus(): void {
    this.showLeaveStatus = true;
    this.showUsers = false;
    this.showLeaveTypes = false;
  }

}
