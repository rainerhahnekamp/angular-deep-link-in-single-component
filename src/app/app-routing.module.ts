import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProgrammaticComponent} from "./programmatic/programmatic.component";
import {RouterLinkComponent} from "./router-link/router-link.component";

const routes: Routes = [{
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
