import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared/shared.module';
import { ApplicationPaths } from './api-authorization.constants';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: ApplicationPaths.Register, component: LoginComponent },
      { path: ApplicationPaths.Profile, component: LoginComponent },
      { path: ApplicationPaths.Login, component: LoginComponent },
      { path: ApplicationPaths.LoginFailed, component: LoginComponent },
      { path: ApplicationPaths.LoginCallback, component: LoginComponent },
      { path: ApplicationPaths.LogOut, component: LogoutComponent },
      { path: ApplicationPaths.LoggedOut, component: LogoutComponent },
      { path: ApplicationPaths.LogOutCallback, component: LogoutComponent },
      { path: ApplicationPaths.UnauthorizedPath, component: UnauthorizedComponent },
    ]),
    SharedModule,
  ],
  declarations: [LoginMenuComponent, LoginComponent, LogoutComponent, UnauthorizedComponent],
  exports: [LoginMenuComponent, LoginComponent, LogoutComponent, UnauthorizedComponent],
})
export class ApiAuthorizationModule {}
