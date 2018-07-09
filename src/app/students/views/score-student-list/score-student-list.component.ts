import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-student-list',
  templateUrl: './score-student-list.component.html',
  styleUrls: ['./score-student-list.component.scss']
})
export class ScoreStudentListComponent implements OnInit {

  scores: [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
