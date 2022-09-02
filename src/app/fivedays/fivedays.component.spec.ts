import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivedaysComponent } from './fivedays.component';

describe('FivedaysComponent', () => {
  let component: FivedaysComponent;
  let fixture: ComponentFixture<FivedaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivedaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivedaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
