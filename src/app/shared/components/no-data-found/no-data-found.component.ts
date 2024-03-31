import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-found',
  standalone: true,
  imports: [],
  templateUrl: './no-data-found.component.html',
  styleUrls: ['./no-data-found.component.scss']
})
export class NoDataFoundComponent {
  @Input() img: string = 'assets/images/no-data-found.jpg';
  @Input() message!: string;
}
