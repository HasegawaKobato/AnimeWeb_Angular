import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanBookComponent } from './japan-book.component';

describe('JapanBookComponent', () => {
  let component: JapanBookComponent;
  let fixture: ComponentFixture<JapanBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapanBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapanBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
