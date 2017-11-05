import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class EmployeeServiceService {
  domain = this.authService.domain; // Development Domain - Not Needed in Production
  options;

  constructor(
   private authService: AuthService,
   private http: Http
 ) { }

 createAuthenticationHeaders() {
   this.authService.loadToken(); // Get token so it can be attached to headers
   // Headers configuration options
   this.options = new RequestOptions({
     headers: new Headers({
       'Content-Type': 'application/json', // Format set to JSON
       'authorization': this.authService.authToken // Attach token
     })
   });
 }

  add_employee(employee) {
    console.log("safasfas");
     this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/employee/add_employee', employee).map(res => res.json());
  }


  list_employee() {
    return this.http.get(this.domain + '/employee/list_employee').map(res => res.json());
  }

}
