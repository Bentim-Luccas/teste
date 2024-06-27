import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbListaCompartilhadaComponent } from './breadcrumb-lista-compartilhada.component';

describe('BreadcrumbListaCompartilhadaComponent', () => {
  let component: BreadcrumbListaCompartilhadaComponent;
  let fixture: ComponentFixture<BreadcrumbListaCompartilhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbListaCompartilhadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrumbListaCompartilhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
