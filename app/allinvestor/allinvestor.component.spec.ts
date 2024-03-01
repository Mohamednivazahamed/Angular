import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinvestorComponent } from './allinvestor.component';

describe('AllinvestorComponent', () => {
  let component: AllinvestorComponent;
  let fixture: ComponentFixture<AllinvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllinvestorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllinvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
