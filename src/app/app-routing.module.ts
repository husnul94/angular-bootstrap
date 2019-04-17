import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppshellComponent} from "./appshell/appshell.component";
import {ExamplePage} from "./dashboard/example/example.page";
import {TooltipPage} from "./dashboard/tooltip/tooltip.page";
import {TimepickerPage} from "./dashboard/timepicker/timepicker.page";
import {RatingPage} from "./dashboard/rating/rating.page";


const routes: Routes = [
  {path: '',
    pathMatch: 'full',
    redirectTo: 'shell'
  },
  {
    path: 'shell',
    component: AppshellComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', component: ExamplePage},
      {path: 'tooltip', component: TooltipPage},
      {path: 'timepicker', component: TimepickerPage},
      {path: 'rating', component: RatingPage},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
