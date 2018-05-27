import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcinkiComponent } from './odcinki.component';

describe('OdcinkiComponent', () => {
  let component: OdcinkiComponent;
  let fixture: ComponentFixture<OdcinkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdcinkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdcinkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
