import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingpointComponent } from './workingpoint.component';

describe('WorkingpointComponent', () => {
  let component: WorkingpointComponent;
  let fixture: ComponentFixture<WorkingpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
