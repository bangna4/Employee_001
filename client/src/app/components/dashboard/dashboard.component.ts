import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
