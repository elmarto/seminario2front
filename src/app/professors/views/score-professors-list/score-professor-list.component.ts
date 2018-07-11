import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ScoreService } from '../../../shared/services/score.service';
import { ScoreRequest } from '../../../shared/interfaces/prospects';

@Component({
  selector: 'app-score-professor-list',
  templateUrl: './score-professor-list.component.html',
  styleUrls: ['./score-professor-list.component.scss']
})
export class ScoreProfessorListComponent implements OnInit {

  scores: any[] = [];
  pendingScores: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private scoreService: ScoreService
  ) {
    this.scoreService.getProfessionalPendingScores().subscribe(response => this.pendingScores = response.values);
    this.scoreService.getProfessionalScores().subscribe(response => this.scores = response.values);
  }

  ngOnInit() {
  }

  sendScore(scoreId, index) {
    const request: ScoreRequest = {
      scoreID: scoreId,
      projectID: this.pendingScores[index].projectID,
      comments: ''
    };
    this.scoreService.setProfessionalScores(request).subscribe(response => {
      this.scores.push(this.pendingScores[index]);
      this.pendingScores.splice(index, 1);
      this.snackBar.open('¡Gracias por calificar al alumno!' , null, { duration: 2000 });
    });
  }

}
