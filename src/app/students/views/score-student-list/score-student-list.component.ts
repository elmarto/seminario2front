import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ScoreService } from 'app/shared/services/score.service';
import { ScoreRequest } from 'app/shared/interfaces/prospects';

@Component({
  selector: 'app-score-student-list',
  templateUrl: './score-student-list.component.html',
  styleUrls: ['./score-student-list.component.scss']
})
export class ScoreStudentListComponent implements OnInit {

  scores: [1, 2, 3];

  constructor(
    private snackBar: MatSnackBar,
    private scoreService: ScoreService
  ) {
    this.scoreService.getClientScores().subscribe(scores => this.scores = scores);
  }

  ngOnInit() {
  }

  sendScore(scoreId) {
    const request: ScoreRequest = {
      scoreID: scoreId,
      comments: ''
    };
    this.scoreService.setClientScores(request).subscribe(response => {
      this.snackBar.open('¡Gracias por calificar al profesor!' , null, { duration: 2000 });
    });
  }

}
