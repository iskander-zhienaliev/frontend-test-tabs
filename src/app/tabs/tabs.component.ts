import {
  Component,
  ContentChildren,
  HostBinding,
  AfterContentInit,
  QueryList
} from '@angular/core';
import {TabComponent} from "./tab/tab.component";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements AfterContentInit {
  @HostBinding('class.tabs__buttons') someClass: boolean = true;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>

  ngAfterContentInit(): void {
    this.tabs.forEach(tab => {
      tab.clicked.subscribe(() => {
        this.tabs.forEach(tabItem => {
          if (tabItem !== tab) {
            tabItem.hide()
          }
        })
      })
    })
    this.tabs.first.show()
  }
}
