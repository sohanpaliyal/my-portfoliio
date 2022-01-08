import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status1 :any  = false;

  title = 'my-portfolio';
  toggleType: number = 1;

  toggleClass(toggleType:number){
    this.toggleType = toggleType
  }
}
