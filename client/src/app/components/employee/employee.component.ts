import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  first_name:         string;
  last_name:          string;
  email:              string;
  dob:                Date;
  gender:             string;
  employee_id:        string;
  joining_date:       Date;
  skill:              string;
  designation:        string;
  interview_comments: string;
  phone:              string;
  current_street:     string;
  current_city:       string;
  current_state:      string;
  current_zip:        string;
  permanent_street:   string;
  permanent_city:     string;
  permanent_state:    string;
  permanent_zip:      string;
  message;
  messageClass;
  processing = false;
  constructor(
    private employeeService: EmployeeServiceService ,
    private router: Router
  ) {

  }



  ngOnInit() {

  }



  onEmployeeSubmit()
  {
    console.log("sdfsdf");
    this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
    // Disable the form
    // Create user object form user's inputs
    const employee = {
      first_name:         this.first_name,
      last_name:          this.last_name,
      email:              this.email,
      dob:                this.dob,
      gender:             this.gender,
      employee_id:        this.employee_id,
      joining_date:       this.joining_date,
      skill:              this.skill,
      designation:        this.designation,
      interview_comments: this.interview_comments,
      phone:              this.phone,
      current_street:     this.current_street,
      current_city:       this.current_city,
      current_state:      this.current_state,
      current_zip:        this.current_zip,
      permanent_street:   this.permanent_street,
      permanent_city:     this.permanent_city,
      permanent_state:    this.permanent_state,
      permanent_zip:      this.permanent_zip
     };
     console.log("safasfas");

     this.employeeService.add_employee(employee).subscribe(data => {

        console.log("sas");
        // Resposne from registration attempt
        console.log(data.success);
        if (!data.success) {
          this.messageClass = 'alert alert-danger'; // Set an error class
          this.message = data.message; // Set an error message
          this.processing = false;  // Re-enable form
        } else {
          this.messageClass = 'alert alert-success'; // Set a success class
          this.message = data.message; // Set a success message
          this.router.navigate(['/dashboard']);
          // After 2 second timeout, navigate to the login page
        }
     });
  }

}
