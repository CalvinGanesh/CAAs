import { Component } from '@angular/core';

@Component({
  selector: 'app-approval-list',
  templateUrl: './approval-list.component.html',
  styleUrls: ['./approval-list.component.css']
})
export class ApprovalListComponent {
  headeritems = ['Course Name', 'Student Name', 'Class Start Date', 'Class End Date', 'Registered Date', 'Action'];
  items = [{coursename: 'Aeronautical Search and Rescue Operations', studentname: 'Timothy Chow', start: '2023-26-06', end: '2023-27-06', registered: '2023-20-06'}];
}
