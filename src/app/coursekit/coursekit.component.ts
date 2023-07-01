import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-coursekit',
  templateUrl: './coursekit.component.html',
  styleUrls: ['./coursekit.component.css']
})
export class CoursekitComponent {
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files: any[] = [];
  list = true;
  headeritems = ["Course Name", "Short Description", "Long Description",
  "Video Link", "Document Link", "Actions"]
  listitems = [{coursename: "Air Traffic Safety", sd: "Air Traffic Safety", ld: "Air Traffic Safety", vltitle: "Air Traffic", dl: "https://www.caas.gov.sg/"}];
  
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
}
