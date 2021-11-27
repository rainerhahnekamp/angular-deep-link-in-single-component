import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HolidayDetailComponent} from "./holiday-detail/holiday-detail.component";
import {HomeComponent} from "./home.component";
import {ProgrammaticComponent} from "./programmatic/programmatic.component";
import {RouterLinkComponent} from "./router-link/router-link.component";

@NgModule({
  declarations: [
    AppComponent,
    RouterLinkComponent,
    ProgrammaticComponent,
    HomeComponent,
    HolidayDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
