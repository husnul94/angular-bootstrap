import {Component} from '@angular/core';

@Component({
  selector : 'trg-carousel.page',
  templateUrl : './carousel.page.html'
})
export class CarouselPage{
  pictures = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

}
