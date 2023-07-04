import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent {
  @Output() goBack = new EventEmitter();
  @Output() goNext = new EventEmitter();
  pageone = true;
  pressed = [false, false, false, false];

  constructor(private router: Router) {}

 cnitems=["Aviation Security Programmee in Public Policy","Air Traffic Safety Electronics Personnel Basic",
 "ICAO PANS-OPS Instrument","Senior Airport Fire Officers","Aeronautical Search and Rescue Operations"];
 cditems=["Online","Offline","Hybrid"];
 sitems=["Active","Inactive"]

 back() {
  this.router.navigate(['/Schedule Class/List']);
 }

 toggleCheck(num: number) {
  this.pressed[num] = !this.pressed[num];
 }

 next() {
  this.pageone = !this.pageone;
 }

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

}
