import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalidaAlumnoPage } from './salida-alumno.page';

describe('SalidaAlumnoPage', () => {
  let component: SalidaAlumnoPage;
  let fixture: ComponentFixture<SalidaAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalidaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
