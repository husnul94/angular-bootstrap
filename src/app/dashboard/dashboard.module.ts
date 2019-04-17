import {NgModule} from "@angular/core";
import {ExamplePage} from "./example/example.page";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  bootstrap:[],
  providers: [],
  declarations: [ExamplePage],
  imports:[SharedModule],
  exports: [],
  entryComponents: [],
})
export class DashboardModule {

}
