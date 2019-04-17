import {NgModule} from "@angular/core";
import {ExamplePage} from "./example/example.page";
import {SharedModule} from "../shared/shared.module";
import {CollapsePage} from './collapse/collapse.page';
import {DropdownBasicPage} from './dropdown/dropdown-basic.page';


@NgModule({
  bootstrap:[],
  providers: [],
  declarations: [ExamplePage, CollapsePage, DropdownBasicPage],
  imports:[SharedModule],
  exports: [],
  entryComponents: [],
})
export class DashboardModule {

}
