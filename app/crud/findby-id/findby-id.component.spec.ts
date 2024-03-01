import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyIDComponent } from './findby-id.component';

describe('FindbyIDComponent', () => {
  let component: FindbyIDComponent;
  let fixture: ComponentFixture<FindbyIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindbyIDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindbyIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
