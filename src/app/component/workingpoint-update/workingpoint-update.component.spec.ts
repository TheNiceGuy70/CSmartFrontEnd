import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingpointUpdateComponent } from './workingpoint-update.component';

describe('WorkingpointUpdateComponent', () => {
  let component: WorkingpointUpdateComponent;
  let fixture: ComponentFixture<WorkingpointUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingpointUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingpointUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
