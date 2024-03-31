import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { IUser } from '@app/modules/user/models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  user = input.required<IUser>();

}
