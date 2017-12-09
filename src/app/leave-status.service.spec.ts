import { TestBed, inject } from '@angular/core/testing';

import { LeaveStatusService } from './leave-status.service';

describe('LeaveStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveStatusService]
    });
  });

  it('should be created', inject([LeaveStatusService], (service: LeaveStatusService) => {
    expect(service).toBeTruthy();
  }));
});
