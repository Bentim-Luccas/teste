import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDisciplinaComponent } from './tabela-disciplina.component';

describe('TabelaDisciplinaComponent', () => {
  let component: TabelaDisciplinaComponent;
  let fixture: ComponentFixture<TabelaDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
