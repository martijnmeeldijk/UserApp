import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <!--<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a routerLink="/users">Users</a>
  </nav>-->
  <nav class="site-header sticky-top py-1">
    <div class="container d-flex flex-column flex-md-row justify-content-between">
      <a href="#" class="chat-title">
        <img class="logo" src="assets/img/rocket_logo.png"/>
        {{title}}
      </a>
      <a routerLink="/users" class="py-2 d-none d-md-inline-block active" >Show Users</a>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Space Users';
}
