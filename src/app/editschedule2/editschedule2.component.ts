import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editschedule2',
  templateUrl: './editschedule2.component.html',
  
  styleUrls: ['./editschedule2.component.css']
})
export class Editschedule2Component {
  @Output() goBack = new EventEmitter();
  @Output() goNext = new EventEmitter();

  headeritems = ['Start Date', 'End Date', 'Instructor', 'Lab']
  items = ['', '']
  index = 0;

  deleteItem(i:number) {
    this.items.splice(i, 1);
    console.log(i);
  }

  addItem() {
    this.items.push('');
  }

  back() {
    this.goBack.emit();
  }

  next() {
    this.goNext.emit();
  }
}
