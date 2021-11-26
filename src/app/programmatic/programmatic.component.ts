import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Holiday} from "../holiday";
import {HolidaysService} from "../holidays.service";

@Component({
  selector: "app-holidays",
  templateUrl: "./programmatic.component.html",
  styleUrls: ["./programmatic.component.scss"],
})
export class ProgrammaticComponent implements OnInit {
  expandedId = 0;
  holidays$: Observable<Holiday[]>;

  constructor(holidaysService: HolidaysService, private route: ActivatedRoute, private router: Router) {
    this.holidays$ = holidaysService.holidays$;
  }

  ngOnInit() {
    this.expandedId = +(this.route.snapshot.paramMap.get("id") ?? 0);
    this.route.paramMap.subscribe((paramMap) => {
      this.handleOpened(+(paramMap.get("id") ?? 0))
    });
  }


  handleOpened(id: number) {
    this.expandedId = id;
    this.router.navigate(["../" + id], {relativeTo: this.route});
  }

  handleClosed(id: number) {
    if (this.expandedId === id) {
      this.router.navigate(["../0"], {relativeTo: this.route});
    }

  }
}
