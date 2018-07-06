import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { ResponseMetadata } from '../interfaces/response-metadata';
import { Budget } from '../interfaces/models';

@Injectable()
export class BudgetService {

  constructor(private httpClient: HttpClient) { }

  findByProjectId(projectId): Observable<Budget[]> {
    return this.httpClient.get<ResponseMetadata>(`${environment.apiUrl}/budgets.php/getBudgetsByProjectID/${projectId}`)
      .pipe(map(response => response.values));
  }
}
