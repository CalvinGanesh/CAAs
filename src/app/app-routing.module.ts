import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { EditCourseCreateComponent } from './edit-course-create/edit-course-create.component';
import { CourseApprovalComponent } from './course-approval/course-approval.component';
import { CoursekitComponent } from './coursekit/coursekit.component';

const routes: Routes = [
  {path: 'Schedule Class', component: ScheduleComponent},
  {path: 'Schedule Class/List', component: ScheduleComponent},
  {path: 'Course', component: EditCourseCreateComponent},
  {path: 'Course/Course Approval', component: CourseApprovalComponent},
  {path: 'Course/Course Kit', component: CoursekitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
