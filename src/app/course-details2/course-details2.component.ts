import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details2',
  imports: [],
  templateUrl: './course-details2.component.html',
  styleUrl: './course-details2.component.css'
})
export class CourseDetails2Component {
  constructor(private router: Router) { }

  close() {
    this.router.navigate([{ outlets: { courseDetails: null, courseDetails2: null } }]);
  }
}
