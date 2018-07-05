import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {} // including private automatically makes this a property

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
