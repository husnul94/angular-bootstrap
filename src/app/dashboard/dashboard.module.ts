import {NgModule} from '@angular/core';
import {ExamplePage} from './example/example.page';
import {SharedModule} from '../shared/shared.module';
import {CarouselPage} from './carousel/carousel.page';
import {AlertPage} from './alert/alert.page';


@NgModule({
  bootstrap: [],
  providers: [],
  declarations: [ExamplePage, CarouselPage, AlertPage],
  imports: [SharedModule],
  exports: [],
  entryComponents: [],
})
export class DashboardModule {

}
