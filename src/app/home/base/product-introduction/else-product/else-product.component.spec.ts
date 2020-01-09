import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseProductComponent } from './else-product.component';

describe('ElseProductComponent', () => {
  let component: ElseProductComponent;
  let fixture: ComponentFixture<ElseProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElseProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
