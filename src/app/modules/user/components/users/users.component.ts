import { Component, Input } from '@angular/core';
import { ListLoopingComponent } from 'src/app/shared/components/list-looping/list-looping.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ListLoopingComponent
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export default class UsersComponent {
  @Input() keyowrd!: string;
}
