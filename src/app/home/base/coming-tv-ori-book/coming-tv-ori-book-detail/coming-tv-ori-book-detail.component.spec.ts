import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingTvOriBookDetailComponent } from './coming-tv-ori-book-detail.component';

describe('ComingTvOriBookDetailComponent', () => {
  let component: ComingTvOriBookDetailComponent;
  let fixture: ComponentFixture<ComingTvOriBookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingTvOriBookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingTvOriBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
