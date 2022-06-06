import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkingPointService } from 'src/app/service/workingpoint.service';
import { WorkingPoint } from 'src/app/interface/workingpoint'; 
import { Address } from 'src/app/interface/address';

@Component({
  selector: 'app-workingpoint-new',
  templateUrl: './workingpoint-new.component.html',
  styleUrls: ['./workingpoint-new.component.css']
})
export class WorkingPointNewComponent implements OnInit {
  workingPointForm!: FormGroup;
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
  workingPoint: WorkingPoint = {
    workingPointId: "",
    fiscalCode: this.fieldMessage,
    address: this.address
  }

  constructor(private workingPointService: WorkingPointService, private router: Router) { }

  ngOnInit(): void {
    this.buildWorkingPointForm();
  }

  buildWorkingPointForm() {
    this.workingPointForm = new FormGroup({
      fiscalCode: new FormControl("fiscalCode", [Validators.required]),
      county: new FormControl("county", [Validators.required]),
      locality: new FormControl("locality", [Validators.required]),
      street: new FormControl("street", [Validators.required]),
      streetNumber: new FormControl("streetNumber", [Validators.required]),
      blockNumber: new FormControl("blockNumber", [Validators.required]),
      stairNumber: new FormControl("stairNumber", [Validators.required]),
      floor: new FormControl("floor", [Validators.required]),
      apartmentNumber: new FormControl("apartmentNumber", [Validators.required])
    });
  }

  submitWorkingPoint() {
    if (this.workingPointForm.valid) {
      this.workingPointService.addNewWorkingPoint(this.workingPoint).subscribe(() => {
        console.log("Working point added");
        window.location.reload();
      });
      this.formMessage = "Your working point has been saved";
    }
    else {
      console.log('Not good')
    }
  }

}
