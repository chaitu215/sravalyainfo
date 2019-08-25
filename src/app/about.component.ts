import { Component, Input } from '@angular/core';

@Component({
  selector: 'about',
  template: `<b>in About </b>`,
  styles: [`a { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
