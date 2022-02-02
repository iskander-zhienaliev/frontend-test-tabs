import {Component, Input} from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
})
export class TabContentComponent {
  @Input() shouldShow = false
}
