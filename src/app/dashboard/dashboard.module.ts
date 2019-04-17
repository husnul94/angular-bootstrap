import {NgModule} from "@angular/core";
import {ExamplePage} from "./example/example.page";
import {SharedModule} from "../shared/shared.module";
import {TypeaheadPage} from "./typeahead/typeahead.page";
import {TooltipPage} from "./tooltip/tooltip.page";
import {TimepickerPage} from "./timepicker/timepicker.page";
import {RatingPage} from "./rating/rating.page";


@NgModule({
  bootstrap:[],
  providers: [],
  declarations: [ExamplePage,
                TypeaheadPage,
                TooltipPage,
                TimepickerPage,
                RatingPage],
  imports:[SharedModule],
  exports: [],
  entryComponents: [],
})
export class DashboardModule {

}
