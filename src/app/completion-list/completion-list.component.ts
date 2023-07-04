import { Component } from '@angular/core';

@Component({
  selector: 'app-completion-list',
  templateUrl: './completion-list.component.html',
  styleUrls: ['./completion-list.component.css']
})
export class CompletionListComponent {
  headeritems = ['Course Name', 'Student Name', 'Class Start Date', 'Class End Date', 'Action'];
  items = [{coursename: 'Senior Airport Fire Officers', studentname: 'Timothy Chow', start: '2023-01-07', end: '2023-03-07'}]
}
