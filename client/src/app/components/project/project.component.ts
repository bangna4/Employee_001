import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public data: Object;
  public temp_var: Object=false;
  constructor(
    private employeeService: EmployeeServiceService
    ) {}
  ngOnInit(): void {
   this.employeeService.list_employee().subscribe(list => {
       this.data=list;
      this.temp_var=true;
    });
}

}
