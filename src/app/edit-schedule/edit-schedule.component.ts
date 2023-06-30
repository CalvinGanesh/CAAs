import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent {

 
  selectedOption1: string | undefined;
  selectedOption2: string | undefined;
  selectedOption3: string | undefined;
  // name = new FormControl();
  // dropdown = new FormControl();
  // options = ['Aviation Security Programmeein Public Policy', 
  // 'Air Traffic Safety Electronics Personnel Basic',
  //  'ICAO PANS-OPS Instrument', 
  //  'Senior Airport Fire Officers',
  // 'Aeronautical Search and Rescue Operations'];
  // testSubscription: Subscription | undefined;
  // online = new FormControl();
  // Offline = ['A', 
  // 'B',
  //  'C', 
  //  ];
  // testSubscription1: Subscription | undefined;

  // ngOnInit() {
  //   this.testSubscription = this.dropdown.valueChanges
  //     // .pipe(debounceTime(100))
  //     .subscribe(value => console.log(value));
  //     this.testSubscription1 = this.online.valueChanges
  //     // .pipe(debounceTime(100))
  //     .subscribe(value => console.log(value));
  // }
}


