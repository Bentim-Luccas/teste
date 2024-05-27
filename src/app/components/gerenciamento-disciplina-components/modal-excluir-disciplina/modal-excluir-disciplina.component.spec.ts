import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirDisciplinaComponent } from './modal-excluir-disciplina.component';

describe('ModalExcluirDisciplinaComponent', () => {
  let component: ModalExcluirDisciplinaComponent;
  let fixture: ComponentFixture<ModalExcluirDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalExcluirDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalExcluirDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
