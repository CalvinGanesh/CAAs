import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-course-create-second',
  templateUrl: './edit-course-create-second.component.html',
  styleUrls: ['./edit-course-create-second.component.css']
})
export class EditCourseCreateSecondComponent {
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(f: any) {
    this.prepareFilesList(f.files);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
   prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = "";
  }

  submit() {
    console.log("submitted!");
  }

}
