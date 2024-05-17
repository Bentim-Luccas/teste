import { ComponentFixture, TestBed } from '@angular/core/testing';
import { arquivosComponent } from './arquivo.component';

describe('ArquivosComponent', () => {
  let component: arquivosComponent;
  let fixture: ComponentFixture<arquivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [arquivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(arquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
