import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingTvTradBookDetailComponent } from './coming-tv-trad-book-detail.component';

describe('ComingTvTradBookDetailComponent', () => {
  let component: ComingTvTradBookDetailComponent;
  let fixture: ComponentFixture<ComingTvTradBookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingTvTradBookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingTvTradBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
