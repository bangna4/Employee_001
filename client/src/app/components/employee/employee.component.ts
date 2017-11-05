import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  form: FormGroup;
  message;
  messageClass;
  processing = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private employeeService: EmployeeServiceService ,
    private router: Router
  ) {
    this.createNewEmployeeForm(); // Create Angular 4 Form when component loads
  }

  createNewEmployeeForm() {
    this.form = this.formBuilder.group({
      first_name:'',
      last_name:'',
      email:'',
      dob:'',
      gender:'',
      employee_id:'',
      joining_date:'',
      skill:'',
      designation:'',
      interview_comments:'',
      phone:'',
      current_street:'',
      current_city:'',
      current_state:'',
      current_zip:'',
      permanent_street:'',
      permanent_city:'',
      permanent_state:'',
      permanent_zip:'',
    });
  }


  ngOnInit() {

  }

  disableForm() {
    this.form.controls['first_name'].disable();
    this.form.controls['last_name'].disable();
    this.form.controls['email'].disable();
    this.form.controls['dob'].disable();
    this.form.controls['gender'].disable();
    this.form.controls['employee_id'].disable();
    this.form.controls['joining_date'].disable();
    this.form.controls['skill'].disable();
    this.form.controls['designation'].disable();
    this.form.controls['interview_comments'].disable();
    this.form.controls['phone'].disable();
    this.form.controls['current_street'].disable();
    this.form.controls['current_city'].disable();
    this.form.controls['current_state'].disable();
    this.form.controls['current_zip'].disable();
    this.form.controls['permanent_street'].disable();
    this.form.controls['permanent_city'].disable();
    this.form.controls['permanent_state'].disable();
    this.form.controls['permanent_zip'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.form.controls['first_name'].enable();
    this.form.controls['last_name'].enable();
    this.form.controls['email'].enable();
    this.form.controls['dob'].enable();
    this.form.controls['gender'].enable();
    this.form.controls['employee_id'].enable();
    this.form.controls['joining_date'].enable();
    this.form.controls['skill'].enable();
    this.form.controls['designation'].enable();
    this.form.controls['interview_comments'].enable();
    this.form.controls['phone'].enable();
    this.form.controls['current_street'].enable();
    this.form.controls['current_city'].enable();
    this.form.controls['current_state'].enable();
    this.form.controls['current_zip'].enable();
    this.form.controls['permanent_street'].enable();
    this.form.controls['permanent_city'].enable();
    this.form.controls['permanent_state'].enable();
    this.form.controls['permanent_zip'].enable();
  }



}
