import { TestBed, inject } from '@angular/core/testing';

import { ByloSzukanieService } from './bylo-szukanie.service';

describe('ByloSzukanieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ByloSzukanieService]
    });
  });

  it('should be created', inject([ByloSzukanieService], (service: ByloSzukanieService) => {
    expect(service).toBeTruthy();
  }));
});
