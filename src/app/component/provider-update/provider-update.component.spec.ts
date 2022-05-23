import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderUpdate } from './provider-update.component';

describe('ProviderDetailsComponent', () => {
  let component: ProviderUpdate;
  let fixture: ComponentFixture<ProviderUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderUpdate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
