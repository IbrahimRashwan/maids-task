import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, effect, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { IUser } from '@app/modules/user/models/user.model';
import { UserService } from '@app/modules/user/services/user.service';
import { SpinnerLoadingComponent } from '@app/shared/components/spinner-loading/spinner-loading.component';
import { finalize } from 'rxjs/internal/operators/finalize';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    SpinnerLoadingComponent,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export default class UserDetailsComponent {
  private _userService: UserService = inject(UserService);
  private _router: Router = inject(Router);
  public id = input.required<number>();
  public user!: IUser;
  public isLoading!: boolean;

  constructor(){
    effect(() => {
      if(this.id()){
        this.getUserDetails();
      }
    })
  }

  getUserDetails(){
    this.isLoading = true;
    this._userService.getUserDetails(this.id())
    .pipe(
      finalize(() => this.isLoading = false),
      // shareReplay(1)
    )
    .subscribe(
      {
        next: (data: IUser) => this.user = data,
        error: (error: HttpErrorResponse) => {
          if(error.status == 404){
            this._router.navigate(['**']);
          }
        }
      }
    );
  }

}
