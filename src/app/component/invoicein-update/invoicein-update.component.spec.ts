import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceinUpdateComponent } from './invoicein-update.component';

describe('InvoiceinUpdateComponent', () => {
  let component: InvoiceinUpdateComponent;
  let fixture: ComponentFixture<InvoiceinUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceinUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceinUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
