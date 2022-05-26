import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceinNewComponent } from './invoicein-new.component';

describe('InvoiceinNewComponent', () => {
  let component: InvoiceinNewComponent;
  let fixture: ComponentFixture<InvoiceinNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceinNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceinNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
