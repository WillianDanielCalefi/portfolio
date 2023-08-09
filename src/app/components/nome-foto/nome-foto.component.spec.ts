import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeFotoComponent } from './nome-foto.component';

describe('NomeFotoComponent', () => {
  let component: NomeFotoComponent;
  let fixture: ComponentFixture<NomeFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomeFotoComponent]
    });
    fixture = TestBed.createComponent(NomeFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
