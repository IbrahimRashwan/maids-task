import { Component } from '@angular/core';
import { NoDataFoundComponent } from '@app/shared/components/no-data-found/no-data-found.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NoDataFoundComponent],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export default class NotFoundComponent {

}
