import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env} from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScoreService  {
  constructor(private httpClient: HttpClient) { }

  all(): Observable<any> {
    return this.httpClient.get<any>(`${env.apiUrl}/scores.php/getScores?`);
  }
}
