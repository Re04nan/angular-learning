import { TestBed } from '@angular/core/testing';

import { DirectivesNgifService } from './directives-ngif.service';

describe('DirectivesNgifService', () => {
  let service: DirectivesNgifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectivesNgifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
