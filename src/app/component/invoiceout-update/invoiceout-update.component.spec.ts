import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceoutUpdateComponent } from './invoiceout-update.component';

describe('InvoiceoutUpdateComponent', () => {
  let component: InvoiceoutUpdateComponent;
  let fixture: ComponentFixture<InvoiceoutUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceoutUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceoutUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
