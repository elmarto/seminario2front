import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-student-list',
  templateUrl: './review-student-list.component.html',
  styleUrls: ['./review-student-list.component.scss']
})
export class ReviewStudentListComponent implements OnInit {

  reviews: [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
