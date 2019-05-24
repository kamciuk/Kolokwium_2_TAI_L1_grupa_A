import { TestBed } from '@angular/core/testing';

import { KMDataService } from './km-data.service';

describe('KMDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KMDataService = TestBed.get(KMDataService);
    expect(service).toBeTruthy();
  });
});
