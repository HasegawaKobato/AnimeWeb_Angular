import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingTvOriBookComponent } from './coming-tv-ori-book.component';

describe('ComingTvOriBookComponent', () => {
  let component: ComingTvOriBookComponent;
  let fixture: ComponentFixture<ComingTvOriBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingTvOriBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingTvOriBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
