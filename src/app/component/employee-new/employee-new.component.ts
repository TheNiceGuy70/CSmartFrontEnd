import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from "../../interface/employee";
import { Address } from 'src/app/interface/address';
import { Contract } from "../../interface/contract";

@Component({
  selector: 'app-new-employee',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
  employeeForm!: FormGroup;
  formMessage: string = "";
  fieldMessage: string = "";

  address: Address = {
    addressId: "",
    county: this.fieldMessage,
    locality: this.fieldMessage,
    street: this.fieldMessage,
    streetNumber: this.fieldMessage,
    blockNumber: this.fieldMessage,
    stairNumber: this.fieldMessage,
    floor: 0,
    apartmentNumber: 0
  }
  contract: Contract = {
    contractId: "",
    contractType: this.fieldMessage,
    workHoursPerDay: 0,
    legalDaysOff: 0,
    brutSalary: 0.0
  }
  employee: Employee = {
    employeeId: "",
    firstName: this.fieldMessage,
    lastName: this.fieldMessage,
    cnp: this.fieldMessage,
    role: this.fieldMessage,
    studies: this.fieldMessage,
    employmentDate: this.fieldMessage,
    address: this.address,
    contract: this.contract
  }

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.buildEmployeeForm();
  }

  buildEmployeeForm() {
    this.employeeForm = new FormGroup({
      firstName: new FormControl("firstName", [Validators.required]),
      lastName: new FormControl("lastName", [Validators.required]),
      cnp: new FormControl("cnp", [Validators.required]),
      role: new FormControl("role", [Validators.required]),
      studies: new FormControl("studies", [Validators.required]),
      employmentDate: new FormControl("employmentDate", [Validators.required]),
      apartmentNumber: new FormControl("apartmentNumber", [Validators.required]),
      contractType: new FormControl("contractType", [Validators.required]),
      workHoursPerDay: new FormControl("workHoursPerDay", [Validators.required]),
      legalDaysOff: new FormControl("legalDaysOff", [Validators.required]),
      brutSalary: new FormControl("brutSalary", [Validators.required]),
      county: new FormControl("county", [Validators.required]),
      locality: new FormControl("locality", [Validators.required]),
      street: new FormControl("street", [Validators.required]),
      streetNumber: new FormControl("streetNumber", [Validators.required]),
      blockNumber: new FormControl("blockNumber", [Validators.required]),
      stairNumber: new FormControl("stairNumber", [Validators.required]),
      floor: new FormControl("floor", [Validators.required])
    });
  }

  submitEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.addNewEmployee(this.employee).subscribe(() => {
        window.location.reload();
        console.log("Employee added");
      });
      this.formMessage = "Your employee has been saved";
    }
    else {
      console.log('Not good')
    }
  }
}
