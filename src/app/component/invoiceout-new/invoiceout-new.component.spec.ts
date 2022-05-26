import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceoutNewComponent } from './invoiceout-new.component';

describe('InvoiceoutNewComponent', () => {
  let component: InvoiceoutNewComponent;
  let fixture: ComponentFixture<InvoiceoutNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceoutNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceoutNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
