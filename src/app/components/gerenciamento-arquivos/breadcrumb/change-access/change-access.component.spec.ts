import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAccessComponent } from './change-access.component';

describe('ChangeAccessComponent', () => {
  let component: ChangeAccessComponent;
  let fixture: ComponentFixture<ChangeAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeAccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
