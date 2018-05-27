import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlubioneComponent } from './ulubione.component';

describe('UlubioneComponent', () => {
  let component: UlubioneComponent;
  let fixture: ComponentFixture<UlubioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlubioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlubioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
