import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _destroyRef: DestroyRef = inject(DestroyRef)
  private _router: Router = inject(Router)
  public searchControl: FormControl = new FormControl('');

  ngOnInit():void {
    this.onSearchChange();
  }

  onSearchChange():void {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      takeUntilDestroyed(this._destroyRef)
    )
    .subscribe(keyowrd => {
      this._router.navigate(['/users'],{queryParams:{keyowrd}})
    })
  }

}

