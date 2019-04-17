import {Component} from "@angular/core";

@Component({
  selector : 'trg-appshell',
  templateUrl : './rating.page.html',
  styleUrls : ['rating.page.scss']
})
export class RatingPage {
  selected = 0;
  hovered = 0;
  readonly = false;


}
