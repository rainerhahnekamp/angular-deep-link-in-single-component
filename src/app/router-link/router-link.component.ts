import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { Holiday } from '../holiday';
import { HolidaysService } from '../holidays.service';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.scss'],
})
export class RouterLinkComponent implements OnInit {
  holidays$: Observable<Holiday[]>;
  holiday: Holiday | undefined;

  constructor(
    holidaysService: HolidaysService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.holidays$ = holidaysService.holidays$;
  }

  ngOnInit() {
    combineLatest([this.holidays$, this.route.paramMap]).subscribe(
      ([holidays, paramMap]) => {
        const id = +(paramMap.get('id') || 0);
        this.holiday = holidays.find((holiday) => holiday.id === id);
      }
    );
  }
}
