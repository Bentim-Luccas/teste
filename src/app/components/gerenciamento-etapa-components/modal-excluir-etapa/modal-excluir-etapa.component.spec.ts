import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirEtapaComponent } from './modal-excluir-etapa.component';

describe('ModalExcluirEtapaComponent', () => {
  let component: ModalExcluirEtapaComponent;
  let fixture: ComponentFixture<ModalExcluirEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalExcluirEtapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalExcluirEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
