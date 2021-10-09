import {Component, Input} from "@angular/core";
import {Holiday} from "../holiday";

@Component({
  selector: "app-holiday-detail",
  templateUrl: "./holiday-detail.component.html",
  styleUrls: ["./holiday-detail.component.scss"],
})
export class HolidayDetailComponent {
  @Input() holiday: Holiday | undefined;

}
