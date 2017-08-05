import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authService: AuthService;

  constructor(private flashMessagesService: FlashMessagesService,
    authService: AuthService,
    private router: Router
  ) { 
    this.authService = authService;
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.flashMessagesService.show('You are now logged out', {
          cssClass: 'alert-success',
          timeout: 5000
        });
    this.router.navigate(['login']);
    return false;
  }
}
