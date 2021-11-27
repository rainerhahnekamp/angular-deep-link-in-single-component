import {Component} from "@angular/core";

@Component({
  selector: "app-home",
  template: `<p>This is a use-case study in Angular about deep-linking within a
    single component.</p>

  <p>We have a route with dynamic properties. The assigned component needs to
    modify
    the route's dynamic property on certain user actions. No reactivation of the
    component should happen, e.g. ngOnInit is only run once.</p>

  <p>For example, there is an accordion which updates the dynamic property
    whenever
    the user expands or collapses an item.</p>

  <p>Furthermore, the component should also support deep linking. So if the id
    is
    already set, it would automatically expand the item in \`ngOnInit\`.</p>

  <p>This repository shows how to do that via two different approaches:</p>

  <ol>
    <li>Programmatically: The user action is not triggered via clicking on a
      link. In
      this case, we need to update the URL programmatically.
    </li>
    <li>routerLink: The user triggers the action via clicking on a link that
      contains
      the updated route.
    </li>
  </ol>

  <p>To see how it works, just start the Angular application. The sidemenu
    contains
    the links to both approaches.</p>

  `
})
export class HomeComponent {

}
