import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, ReplaySubject, share} from "rxjs";
import {Holiday} from "./holiday";

@Injectable({providedIn: "root"})
export class HolidaysService {
  constructor(
    private httpClient: HttpClient,
  ) {
    this._holidays$ = httpClient.get<Holiday[]>("/assets/holidays.json").pipe(
      share({
        connector: () => new ReplaySubject(),
        resetOnComplete: false,
        resetOnRefCountZero: false,
        resetOnError: true,
      })
    );
  }

  private _holidays$: Observable<Holiday[]>;

  get holidays$(): Observable<Holiday[]> {
    return this._holidays$;
  }
}
