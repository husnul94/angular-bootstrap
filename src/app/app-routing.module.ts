import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppshellComponent} from "./appshell/appshell.component";
import {ExamplePage} from "./dashboard/example/example.page";
import {TooltipPage} from "./dashboard/tooltip/tooltip.page";
import {TimepickerPage} from "./dashboard/timepicker/timepicker.page";
import {RatingPage} from "./dashboard/rating/rating.page";
import {CarouselPage} from './dashboard/carousel/carousel.page';
import {AlertPage} from './dashboard/alert/alert.page';
import {CollapsePage} from './dashboard/collapse/collapse.page';
import {DropdownBasicPage} from './dashboard/dropdown/dropdown-basic.page';


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
      {path: 'collapse', component: CollapsePage},
      {path: 'dropdown', component: DropdownBasicPage},
      {path: 'tooltip', component: TooltipPage},
      {path: 'timepicker', component: TimepickerPage},
      {path: 'rating', component: RatingPage},
      {path: 'carousel', component: CarouselPage},
      {path: 'alert', component: AlertPage}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
