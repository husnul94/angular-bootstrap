import {Component} from "@angular/core";

@Component({
  selector : 'trg-appshell',
  templateUrl : './tooltip.page.html',
  styleUrls : ['tooltip.page.scss']
})
export class TooltipPage {
  name = 'Cohort04';

  toggleWithGreeting(tooltip, greeting: string) {
    if (tooltip.isOpen()) {
      tooltip.close();
    } else {
      tooltip.open({greeting});
    }
  }
}
