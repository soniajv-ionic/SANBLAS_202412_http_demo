import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedaMuseoComponent } from './busqueda-museo.component';


describe('BusquedaMuseoComponent', () => {
  let component: BusquedaMuseoComponent;
  let fixture: ComponentFixture<BusquedaMuseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaMuseoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaMuseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
