import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInvestorComponent } from './delete-investor.component';

describe('DeleteInvestorComponent', () => {
  let component: DeleteInvestorComponent;
  let fixture: ComponentFixture<DeleteInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteInvestorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
