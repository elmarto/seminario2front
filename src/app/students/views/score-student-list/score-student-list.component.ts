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

  scores: any[] = [];
  pendingScores: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private scoreService: ScoreService
  ) {
    this.scoreService.getClientPendingScores().subscribe(response => this.pendingScores = response.values);
    this.scoreService.getClientScores().subscribe(response => this.scores = response.values);
  }

  ngOnInit() {
  }

  sendScore(scoreId, index) {
    // this.scores.push(this.pendingScores[index]);
    // this.pendingScores.slice(index, 1);
    // this.snackBar.open('¡Gracias por calificar al profesor!' , null, { duration: 2000 });
    const request: ScoreRequest = {
      scoreID: scoreId,
      projectID: this.pendingScores[index].projectID,
      comments: ''
    };
    this.scoreService.setClientScores(request).subscribe(response => {
      this.scores.push(this.pendingScores[index]);
      this.pendingScores.splice(index, 1);
      this.snackBar.open('¡Gracias por calificar al profesor!' , null, { duration: 2000 });
    });
  }

}
