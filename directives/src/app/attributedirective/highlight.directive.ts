import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //Get DOM element Reference inside Directive
  //use depenendency
  constructor(private element: ElementRef) {
    console.log('high light directive')
    console.log(this.element.nativeElement)
    this.element.nativeElement.style.backgroundColor = 'yellow'
  }
  //event listener
  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('mouse enter is working')
    this.highLight('blue')
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('mouse leave is working')
    this.highLight(null)
  }

  private highLight(color: any) {
    this.element.nativeElement.style.backgroundColor = color
  }


}
