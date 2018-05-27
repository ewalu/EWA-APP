import { TestBed, inject } from '@angular/core/testing';

import { UlubioneService } from './ulubione.service';

describe('UlubioneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UlubioneService]
    });
  });

  it('should be created', inject([UlubioneService], (service: UlubioneService) => {
    expect(service).toBeTruthy();
  }));
});
