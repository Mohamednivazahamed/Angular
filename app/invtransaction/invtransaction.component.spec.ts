import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvtransactionComponent } from './invtransaction.component';

describe('InvtransactionComponent', () => {
  let component: InvtransactionComponent;
  let fixture: ComponentFixture<InvtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvtransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
