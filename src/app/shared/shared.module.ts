import {NgModule} from '@angular/core';
import {NgbAlertModule, NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";

export const BOOTSTRAP_MODULE = [
  NgbAlertModule,
  NgbButtonsModule
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
