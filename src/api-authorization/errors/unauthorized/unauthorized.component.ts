import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizeService } from 'src/api-authorization/authorize.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css'],
})
export class UnauthorizedComponent implements OnInit {
  public isAuthenticated!: Observable<boolean>;

  constructor(private authorizeService: AuthorizeService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
  }
}
