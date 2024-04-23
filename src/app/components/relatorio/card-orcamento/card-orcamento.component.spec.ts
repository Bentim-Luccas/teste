import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrcamentoComponent } from './card-orcamento.component';

describe('CardOrcamentoComponent', () => {
  let component: CardOrcamentoComponent;
  let fixture: ComponentFixture<CardOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOrcamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
