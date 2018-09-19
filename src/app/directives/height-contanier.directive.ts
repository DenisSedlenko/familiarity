import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeightContainer]',
})
export class HeightContainerDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.height = window.innerHeight + 'px';

    window.addEventListener('resize', function($event) {
      setTimeout(function() {
        el.nativeElement.style.height = window.innerHeight + 'px';
      });
    });
  }
}
