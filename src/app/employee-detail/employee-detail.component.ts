import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `<h2>Employee Detail</h2>
             <h3>{{errorMsg}}</h3>
             <ul *ngFor="let employee of employees">
              <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
            </ul>
              `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public errorMsg;
  public employees = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe(data => this.employees = data,
              error => this.errorMsg = error);
  }

}
