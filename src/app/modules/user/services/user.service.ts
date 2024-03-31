import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IListPayload, ISinglePayload } from '@app/shared/models/payload.model';
import { environment } from '@env';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable()

export class UserService {
  private _http:HttpClient = inject(HttpClient);

  getUsers(page:number): Observable<IListPayload<IUser>>{
    return this._http.get<IListPayload<IUser>>(environment.apiUrl+'users', {params: {page}});
  }

  getUserDetails(id:number): Observable<IUser>{
    return this._http.get<ISinglePayload<IUser>>(environment.apiUrl+'users/'+id)
    .pipe(map((payload: ISinglePayload<IUser>) => payload.data));
  }

}
