import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WorkingPointService } from 'src/app/service/workingpoint.service';
import { WorkingPoint } from 'src/app/interface/workingpoint';

@Component({
  selector: 'app-workingpoint-update',
  templateUrl: './workingpoint-update.component.html',
  styleUrls: ['./workingpoint-update.component.css']
})
export class WorkingPointUpdateComponent implements OnInit {
  workingPointForm!: FormGroup;
  workingPointId!: number;
  workingPoint!: WorkingPoint;
  formMessage: string = '';
  
  constructor(public workingPointService: WorkingPointService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.workingPointId = this.route.snapshot.params['workingPointId'];
    this.workingPointService.getWorkingPointById(this.workingPointId).subscribe((data: WorkingPoint) => {
      this.workingPoint = data;
    })

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

  sendUpdateWorkingPointRequest() {
    if (this.workingPointForm.valid) {
      this.workingPointService.updateWorkingPoint(this.workingPointId, this.workingPoint).subscribe(() => {
        window.location.reload();
        console.log("WorkingPoint updated");
      });
    }
    else {
      this.formMessage = "Please update the product form before submitting";
    }
  }
}
