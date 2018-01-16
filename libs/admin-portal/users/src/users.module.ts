import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer } from './+state/users.reducer';
import { usersInitialState } from './+state/users.init';
import { UsersEffects } from './+state/users.effects';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UsersService } from './services/users.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserListComponent }]),
    StoreModule.forFeature('users', usersReducer, { initialState: usersInitialState }),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersEffects, UsersService],
  declarations: [UserListComponent]
})
export class UsersModule {}
