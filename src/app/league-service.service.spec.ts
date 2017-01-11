/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeagueServiceService } from './league-service.service';

describe('LeagueServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeagueServiceService]
    });
  });

  it('should ...', inject([LeagueServiceService], (service: LeagueServiceService) => {
    expect(service).toBeTruthy();
  }));
});
