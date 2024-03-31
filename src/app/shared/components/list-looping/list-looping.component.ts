import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SpinnerLoadingComponent } from '../spinner-loading/spinner-loading.component';
import { NoDataFoundComponent } from '../no-data-found/no-data-found.component';

@Component({
  selector: 'app-list-looping',
  standalone: true,
  imports: [
    NgTemplateOutlet, 
    RouterLink, 
    SpinnerLoadingComponent,
    NoDataFoundComponent
  ],
  templateUrl: './list-looping.component.html',
  styleUrls: ['./list-looping.component.scss']
})
export class ListLoopingComponent {
  @ContentChild(TemplateRef) listItem!: TemplateRef<unknown>;

  @Output() loadMore: EventEmitter<undefined> = new EventEmitter();

  @Input() list!: unknown[];
  @Input() title!: string;
  @Input() parentClass!: string;
  @Input() seeMoreUrl!: string;
  @Input() showLoadMore!: boolean;
  @Input() isLoading!: boolean;
  @Input() isLoadMoreLoading!: boolean;
  @Input() isMarginReset!: boolean;

}
