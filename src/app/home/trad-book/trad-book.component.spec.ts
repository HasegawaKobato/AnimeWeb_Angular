import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradBookComponent } from './trad-book.component';

describe('TradBookComponent', () => {
  let component: TradBookComponent;
  let fixture: ComponentFixture<TradBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
