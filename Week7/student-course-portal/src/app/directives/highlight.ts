import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  // Step 37: configurable highlight color, defaults to yellow
  @Input() appHighlight = 'yellow';

  private originalBackground = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Read the computed background color (from CSS class, not just inline style)
    const computed = getComputedStyle(this.el.nativeElement).backgroundColor;
    this.originalBackground = computed || '';
    console.log('HighlightDirective initialized on:', this.el.nativeElement.tagName,
                '| color:', this.appHighlight, '| original bg:', this.originalBackground);
  }

  // Step 33: apply highlight color on mouse enter
  @HostListener('mouseenter')
  onMouseEnter(): void {
    console.log('mouseenter fired — applying highlight:', this.appHighlight);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appHighlight, 2); // 2 = RendererStyleFlags2.Important
  }

  // Step 33: restore original background on mouse leave
  @HostListener('mouseleave')
  onMouseLeave(): void {
    console.log('mouseleave fired — restoring:', this.originalBackground);
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
