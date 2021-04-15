import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApplicationPaths, QueryParameterNames } from './api-authorization.constants';
import { AuthorizeService } from './authorize.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeCanActivateGuard implements CanActivate {
  constructor(private authorize: AuthorizeService, private router: Router) {}
  canActivate(_next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authorize.isAuthenticated().pipe(tap((isAuthenticated) => this.handleAuthorization(isAuthenticated, state)));
  }

  private handleAuthorization(isAuthenticated: boolean, state: RouterStateSnapshot) {
    if (!isAuthenticated) {
      this.router.navigate(ApplicationPaths.LoginPathComponents, {
        queryParams: {
          [QueryParameterNames.ReturnUrl]: state.url,
        },
      });
    }
  }
}
