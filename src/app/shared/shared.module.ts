import {NgModule} from '@angular/core';
import {NgbAlertModule, NgbButtonsModule, NgbRatingModule, NgbTimepickerModule, NgbTooltipModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


export const BOOTSTRAP_MODULE = [
  NgbAlertModule,
  NgbButtonsModule,
  NgbTooltipModule,
  NgbTimepickerModule,
  NgbRatingModule,
  NgbCarouselModule];

@NgModule({
  imports : [BOOTSTRAP_MODULE, FormsModule, CommonModule],
  exports : [BOOTSTRAP_MODULE, FormsModule, CommonModule],
  declarations : [],
  providers : [],
  bootstrap : [],
})

export class SharedModule {
}
