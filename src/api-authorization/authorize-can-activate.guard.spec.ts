import { TestBed, inject } from '@angular/core/testing';

import { AuthorizeCanActivateGuard } from './authorize-can-activate.guard';

describe('AuthorizeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizeCanActivateGuard],
    });
  });

  it('should ...', inject([AuthorizeCanActivateGuard], (guard: AuthorizeCanActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
