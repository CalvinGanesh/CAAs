import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { EditCourseCreateComponent } from './edit-course-create/edit-course-create.component';

const routes: Routes = [
  {path: 'Schedule Class', component: ScheduleComponent},
  {path: 'Course', component: EditCourseCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
