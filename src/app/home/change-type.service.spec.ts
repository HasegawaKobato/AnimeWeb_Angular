import { TestBed } from '@angular/core/testing';

import { ChangeTypeService } from './change-type.service';

describe('ChangeTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeTypeService = TestBed.get(ChangeTypeService);
    expect(service).toBeTruthy();
  });
});
