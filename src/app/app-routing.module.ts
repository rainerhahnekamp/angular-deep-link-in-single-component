import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ProgrammaticComponent} from "./programmatic/programmatic.component";
import {RouterLinkComponent} from "./router-link/router-link.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: "programmatic/:id",
    component: ProgrammaticComponent
  }, {
    path: "router-link/:id",
    component: RouterLinkComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
