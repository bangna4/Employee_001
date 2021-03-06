import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private router: Router,
      private flashMessagesService: FlashMessagesService
    ) { }

    onLogoutClick() {
    this.authService.logout(); // Logout user
    this.flashMessagesService.show('My component has initialized!', {
       classes: ['alert-info'], // You can pass as many classes as you need
       timeout: 1000, // Default is 3000
     });
    this.router.navigate(['/']); // Navigate back to home page
  }


  ngOnInit() {
  }

}
