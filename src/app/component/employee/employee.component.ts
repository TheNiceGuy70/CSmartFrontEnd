import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from "../../interface/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit
{
  employeeList: Employee[] = [];

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void
  {
    this.employeeService.getAllEmployees().subscribe({
      next: employees => this.employeeList = employees,
      error: err => console.error(err)
    });
  }

  deleteEmployee(id:any)
  {
    this.employeeService.deleteEmployee(id).subscribe(()=>
    {
      window.location.reload();
    });
  }
}
