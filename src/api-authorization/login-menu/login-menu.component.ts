import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorizeService } from '../authorize.service';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css'],
})
export class LoginMenuComponent implements OnInit {
  @Input() public isSmallScreen!: boolean;
  public isAuthenticated!: Observable<boolean>;
  public userName!: Observable<string | null | undefined>;

  constructor(private authorizeService: AuthorizeService) {}

  ngOnInit() {
    console.log(this.isSmallScreen);

    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map((u) => u && u.name));
  }
}
