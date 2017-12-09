import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HRIS';

  showUsers: boolean = false;
  showLeaves: boolean = false;

  onClickUsers(): void {
    this.showUsers = true;
    this.showLeaves = false;
  }

  onClickLeaves(): void {
    this.showLeaves = true;
    this.showUsers = false;
  }

}
