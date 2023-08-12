import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoPessoalComponent } from './contato-pessoal.component';

describe('ContatoPessoalComponent', () => {
  let component: ContatoPessoalComponent;
  let fixture: ComponentFixture<ContatoPessoalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoPessoalComponent]
    });
    fixture = TestBed.createComponent(ContatoPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
