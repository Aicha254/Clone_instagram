import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export  class navbarComponent {
    image !:string;
  constructor() { }

  ngOnInit(): void {
     this.image = "instagram.png";
  }
}