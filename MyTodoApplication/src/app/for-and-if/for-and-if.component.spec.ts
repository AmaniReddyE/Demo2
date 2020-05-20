import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAndIfComponent } from './for-and-if.component';

describe('ForAndIfComponent', () => {
  let component: ForAndIfComponent;
  let fixture: ComponentFixture<ForAndIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForAndIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForAndIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
