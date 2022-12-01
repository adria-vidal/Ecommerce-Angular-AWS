import { TestBed } from '@angular/core/testing';

import { ConsultasapiService } from './consultasapi.service';

describe('ConsultasapiService', () => {
  let service: ConsultasapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
