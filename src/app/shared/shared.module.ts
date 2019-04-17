import {NgModule} from '@angular/core';
import {
  NgbAlertModule,
  NgbButtonsModule,
  NgbRatingModule,
  NgbTimepickerModule,
  NgbTooltipModule
} from "@ng-bootstrap/ng-bootstrap";

export const BOOTSTRAP_MODULE = [
  NgbAlertModule,
  NgbButtonsModule,
  NgbTooltipModule,
  NgbTimepickerModule,
  NgbRatingModule
];

@NgModule({
  imports : [BOOTSTRAP_MODULE],
  exports : [BOOTSTRAP_MODULE],
  declarations : [],
  providers : [],
  bootstrap : [],
})

export class SharedModule {
}
