import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionamentoComponent } from './permissionamento.component';

describe('PermissionamentoComponent', () => {
  let component: PermissionamentoComponent;
  let fixture: ComponentFixture<PermissionamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
