import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingpointNewComponent } from './workingpoint-new.component';

describe('WorkingpointNewComponent', () => {
  let component: WorkingpointNewComponent;
  let fixture: ComponentFixture<WorkingpointNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingpointNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingpointNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
