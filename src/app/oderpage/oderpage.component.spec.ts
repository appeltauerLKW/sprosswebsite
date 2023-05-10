import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderpageComponent } from './oderpage.component';

describe('OderpageComponent', () => {
  let component: OderpageComponent;
  let fixture: ComponentFixture<OderpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
