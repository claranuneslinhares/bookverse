import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosDetalhesComponent } from './livros-detalhes.component';

describe('LivrosDetalhesComponent', () => {
  let component: LivrosDetalhesComponent;
  let fixture: ComponentFixture<LivrosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivrosDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
