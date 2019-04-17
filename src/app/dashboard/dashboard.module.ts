import {NgModule} from "@angular/core";
import {ExamplePage} from "./example/example.page";
import {SharedModule} from "../shared/shared.module";
import {CollapsePage} from './collapse/collapse.page';
import {DropdownBasicPage} from './dropdown/dropdown-basic.page';
import {TypeaheadPage} from "./typeahead/typeahead.page";
import {TooltipPage} from "./tooltip/tooltip.page";
import {TimepickerPage} from "./timepicker/timepicker.page";
import {RatingPage} from "./rating/rating.page";
import {CarouselPage} from './carousel/carousel.page';
import {AlertPage} from './alert/alert.page';



@NgModule({
  bootstrap:[],
  providers: [],

  imports:[SharedModule],
  declarations: [ExamplePage,
                CollapsePage,
                DropdownBasicPage,
                TypeaheadPage,
                TooltipPage,
                TimepickerPage,
                RatingPage,
                CarouselPage,
                AlertPage],

  exports: [],
  entryComponents: [],
})
export class DashboardModule {

}
