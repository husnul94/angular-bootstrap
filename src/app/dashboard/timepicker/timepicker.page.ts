import {Component} from "@angular/core";

@Component({
  selector : 'trg-appshell',
  templateUrl : './timepicker.page.html',
  styleUrls : ['timepicker.page.scss']
})
export class TimepickerPage {
  time = {hour: 13, minute: 30};

  }
