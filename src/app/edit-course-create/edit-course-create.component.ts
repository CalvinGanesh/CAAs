import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-course-create',
  templateUrl: './edit-course-create.component.html',
  styleUrls: ['./edit-course-create.component.css']
})
export class EditCourseCreateComponent {
  mcitems = ["Aviation Management", "Electronic Personal Communication", "OPS Instrument",
"Aviation Security", "Airport Fire Safety"]
  scitems = ["Aviation", "Management" ]
  next = false;

  moveNext() {
    this.next = !this.next;
  }
}
