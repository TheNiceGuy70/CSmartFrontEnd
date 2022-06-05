import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from "../../interface/employee";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeId!: number;
  employee!: Employee;
  formMessage: string = '';

  constructor(public employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    this.employeeService.getEmployeeById(this.employeeId).subscribe((data: Employee) => {
      this.employee = data;
    })

    this.employeeForm = new FormGroup({
      firstName: new FormControl("firstName", [Validators.required]),
      lastName: new FormControl("lastName", [Validators.required]),
      cnp: new FormControl("cnp", [Validators.required]),
      role: new FormControl("role", [Validators.required]),
      studies: new FormControl("studies", [Validators.required]),
      employmentDate: new FormControl("employmentDate", [Validators.required]),
      county: new FormControl("county", [Validators.required]),
      locality: new FormControl("locality", [Validators.required]),
      street: new FormControl("street", [Validators.required]),
      streetNumber: new FormControl("streetNumber", [Validators.required]),
      blockNumber: new FormControl("blockNumber", [Validators.required]),
      stairNumber: new FormControl("stairNumber", [Validators.required]),
      floor: new FormControl("floor", [Validators.required]),
      apartmentNumber: new FormControl("apartmentNumber", [Validators.required]),
      contractType: new FormControl("contractType", [Validators.required]),
      workHoursPerDay: new FormControl("workHoursPerDay", [Validators.required]),
      legalDaysOff: new FormControl("legalDaysOff", [Validators.required]),
      brutSalary: new FormControl("brutSalary", [Validators.required])
    });
  }

  sendUpdateEmployeeRequest() {
    if (this.employeeForm.valid) {
      this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(() => {
        window.location.reload();
        console.log("Employee updated");
      });
    }
    else {
      this.formMessage = "Please update the product form before submitting";
    }
  }
}
