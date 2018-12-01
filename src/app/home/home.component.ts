import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onServerLoad(id: number) {
    this.router.navigate(["/servers", id, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'TestingFromCode' });
  }

  onLogInApp() {
    this.authenticationService.login();
    console.log("able to login")
  }
  onLogOutApp() {
    this.authenticationService.logout();
    console.log("able to logout")
  }
}
