import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IListPayload } from '@app/shared/models/payload.model';
import { IUser } from '../../models/user.model';
import { take } from 'rxjs/internal/operators/take';
import { finalize } from 'rxjs/internal/operators/finalize';
import { SpinnerLoadingComponent } from '@app/shared/components/spinner-loading/spinner-loading.component';
import { NoDataFoundComponent } from '@app/shared/components/no-data-found/no-data-found.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    SpinnerLoadingComponent,
    NoDataFoundComponent,
    UserCardComponent,
    MatPaginatorModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export default class UsersComponent implements OnInit {
  private _userService: UserService = inject(UserService);
  public page: number = 1;
  public users!: IListPayload<IUser>;
  public isLoading!: boolean;


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.isLoading = true;
    this._userService.getUsers(this.page)
    .pipe(
      take(1),
      finalize(() => this.isLoading = false)
    )
    .subscribe({
      next: (payload: IListPayload<IUser>) => this.users = payload
    });
  }

  handlePageEvent(e: PageEvent){
    this.page = e.pageIndex + 1;
    this.getUsers();
  }

}
