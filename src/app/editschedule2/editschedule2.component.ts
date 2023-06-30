import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editschedule2',
  templateUrl: './editschedule2.component.html',
  
  styleUrls: ['./editschedule2.component.css']
})
export class Editschedule2Component {
<<<<<<< Updated upstream
  
      
  
  selectedOption1: string | undefined;
  selectedOption2: string | undefined;
  // public date = new Date();
  // name = new FormControl();
  // dropdown = new FormControl();
  // options = ['Select', 
  // 'Database Lab',
  // 'test lab-1', 
  // 'test lab-1', 
  // 'test lab-1'];
  // testSubscription: Subscription | undefined;

  // public calendarDate = new Date(2022, 2, 1);
  // public disabledDates = [
  //   [new Date(2022, 2, 4), new Date(2022, 2, 7)], // range of dates that cannot be selected
  //   new Date(2022, 2, 16), // single date that cannot be selected
  //   new Date(2022, 3, 16),
  //   [new Date(2022, 4, 2), new Date(2022, 4, 8)],
  // ]
  // public maxDate = new Date(2022, 5, 0);
  // public minDate = new Date(2022, 0, 1);
=======
  headeritems = ['Start Date', 'End Date', 'Instructor', 'Lab']
  items = ['', '']
  index = 0;
>>>>>>> Stashed changes

  deleteItem(i:number) {
    this.items.splice(i, 1);
    console.log(i);
  }

  addItem() {
    this.items.push('');
  }
}
