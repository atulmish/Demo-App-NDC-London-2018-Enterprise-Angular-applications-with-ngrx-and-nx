import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '@demo-app/auth';
import { User } from '@demo-app/data-models';
import { getUser } from '@demo-app/auth';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$: Store<User>;
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    this.user$ = this.store.select(getUser);
  }
}
