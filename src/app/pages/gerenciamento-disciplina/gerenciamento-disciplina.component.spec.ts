import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoDisciplinaComponent } from './gerenciamento-disciplina.component';

describe('GerenciamentoDisciplinaComponent', () => {
  let component: GerenciamentoDisciplinaComponent;
  let fixture: ComponentFixture<GerenciamentoDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciamentoDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
