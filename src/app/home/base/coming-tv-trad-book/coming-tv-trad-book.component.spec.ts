import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingTvTradBookComponent } from './coming-tv-trad-book.component';

describe('ComingTvTradBookComponent', () => {
  let component: ComingTvTradBookComponent;
  let fixture: ComponentFixture<ComingTvTradBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingTvTradBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingTvTradBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
