import {
  Component, ContentChild, EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';
import {TabContentComponent} from "../tab-content/tab-content.component";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
})
export class TabComponent {
  @HostBinding('class.tabs__button') tabsButtonClass: boolean = true;
  @HostBinding('class.tabs__button--active') tabsButtonActiveClass: boolean = false;

  @ContentChild(TabContentComponent) tabContent: TabContentComponent

  clicked = new EventEmitter()

  @HostListener('click') clickTab() {
    this.show()
  }

  hide() {
    this.tabContent.shouldShow = false
    this.tabsButtonActiveClass = false
  }

  show() {
    this.tabContent.shouldShow = true
    this.tabsButtonActiveClass = true
    this.clicked.emit()
  }

}
