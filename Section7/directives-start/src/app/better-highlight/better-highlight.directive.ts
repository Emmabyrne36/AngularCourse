import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColour = 'transparent';
  @Input() highlightColour = 'blue';
  @HostBinding('style.backgroundColor') backgroundColour;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColour = this.defaultColour;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); // better for using renderer for accessing the dom
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColour = this.highlightColour;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColour = this.defaultColour;
  }

}
