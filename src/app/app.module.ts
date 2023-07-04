import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EditCourseCreateComponent } from './edit-course-create/edit-course-create.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabComponent } from './sidebar/tab/tab.component';
import { SubTabComponent } from './sidebar/tab/sub-tab/sub-tab.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditCourseCreateSecondComponent } from './edit-course-create-second/edit-course-create-second.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { Editschedule2Component } from './editschedule2/editschedule2.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DndDirective } from './dnd.directive';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ListcategorieComponent } from './listcategorie/listcategorie.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseCreateComponent,
    SidebarComponent,
    TabComponent,
    SubTabComponent,
    HeaderComponent,
    DropdownComponent,
    EditCourseCreateSecondComponent,
    EditScheduleComponent,
    Editschedule2Component,
    ScheduleComponent,
    DndDirective,
    MultiSelectDropdownComponent,
    CategorieComponent,
    ListcategorieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
