import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMoreVertComponent } from './menu-more-vert.component';

describe('MenuMoreVertComponent', () => {
  let component: MenuMoreVertComponent;
  let fixture: ComponentFixture<MenuMoreVertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMoreVertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuMoreVertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
