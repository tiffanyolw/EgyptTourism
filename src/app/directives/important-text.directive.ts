import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImportantText]'
})
export class ImportantTextDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.background = "#EDF2F4";
  }

}
