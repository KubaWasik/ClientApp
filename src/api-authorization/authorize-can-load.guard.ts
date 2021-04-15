import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApplicationPaths, QueryParameterNames } from './api-authorization.constants';
import { AuthorizeService } from './authorize.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeCanLoadGuard implements CanLoad {
  constructor(private authorize: AuthorizeService, private router: Router) {}

  canLoad(route: Route, _segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authorize.isAuthenticated().pipe(tap((isAuthenticated) => this.handleAuthorization(isAuthenticated, route.path)));
  }

  private handleAuthorization(isAuthenticated: boolean, path: string | undefined) {
    if (!isAuthenticated) {
      this.router.navigate(ApplicationPaths.LoginPathComponents, {
        queryParams: {
          [QueryParameterNames.ReturnUrl]: `${window.location.origin}/${path}`,
        },
      });
    }
  }
}
