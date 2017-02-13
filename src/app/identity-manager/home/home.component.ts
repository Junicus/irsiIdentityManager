import { Component } from '@angular/core';

export class MenuItem {
  name: string;
  path: string;
  image: string;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public menuItems: Array<MenuItem>;

  constructor() {
    this.menuItems = [
      { name: 'Users', path: '/users', image: 'fa fa-user' },
      { name: 'Roles', path: '/roles', image: 'fa fa-suitcase' }
    ];
  }
};
