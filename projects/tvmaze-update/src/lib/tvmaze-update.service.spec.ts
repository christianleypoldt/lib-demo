import { TestBed } from '@angular/core/testing';

import { TvmazeUpdateService } from './tvmaze-update.service';

describe('TvmazeUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvmazeUpdateService = TestBed.get(TvmazeUpdateService);
    expect(service).toBeTruthy();
  });
});
