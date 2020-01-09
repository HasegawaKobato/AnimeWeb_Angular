import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneMoreComponent } from './zone-more.component';

describe('ZoneMoreComponent', () => {
  let component: ZoneMoreComponent;
  let fixture: ComponentFixture<ZoneMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
