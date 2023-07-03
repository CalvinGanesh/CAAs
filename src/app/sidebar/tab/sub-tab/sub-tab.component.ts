import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sub-tab',
  templateUrl: './sub-tab.component.html',
  styleUrls: ['./sub-tab.component.css']
})
export class SubTabComponent {
  @Output() navigate = new EventEmitter();
  @Input() sub: any;
  @Input() tab: any;

  select() {
    for(let s of this.tab.subs) {
      s.type = "none";
    }
    this.navigate.emit();
    this.sub.type = "selected";
  }
}
