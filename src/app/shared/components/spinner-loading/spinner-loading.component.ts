import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-loading',
  standalone: true,
  templateUrl: './spinner-loading.component.html',
  styleUrls: ['./spinner-loading.component.scss']
})
export class SpinnerLoadingComponent {
  @Input() color!:string;
}
