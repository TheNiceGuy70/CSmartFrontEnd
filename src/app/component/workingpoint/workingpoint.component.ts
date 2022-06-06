import { Component, OnInit } from '@angular/core';
import { WorkingPointService } from 'src/app/service/workingpoint.service';
import { WorkingPoint } from 'src/app/interface/workingpoint';

@Component({
  selector: 'app-workingpoint',
  templateUrl: './workingpoint.component.html',
  styleUrls: ['./workingpoint.component.css']
})
export class WorkingPointComponent implements OnInit {
  workingPointList: WorkingPoint[] = [];

  constructor(public workingPointService: WorkingPointService) { }

  ngOnInit(): void {
    this.workingPointService.getAllWorkingPoints().subscribe({
      next: workingPoints => this.workingPointList = workingPoints,
      error: err => console.error(err)
    });
  }

  deleteWorkingPoint(id: any) {
    this.workingPointService.deleteWorkingPoint(id).subscribe(() => {
      window.location.reload();
    });
  }
}