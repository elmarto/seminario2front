import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { ResponseMetadata } from '../interfaces/response-metadata';
import { Budget } from '../interfaces/models';
import { BudgetCreateRequest, BudgetUpdateRequest } from '../interfaces/prospects';

@Injectable()
export class BudgetService {

  constructor(private httpClient: HttpClient) { }

  create(request: BudgetCreateRequest): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.apiUrl}/budgets.php/insertBudget`, request);
  }

  findByProjectId(projectId): Observable<Budget[]> {
    return this.httpClient.get<ResponseMetadata>(`${environment.apiUrl}/budgets.php/getBudgetsByProjectID/${projectId}`)
      .pipe(map(response => response.values));
  }

  update(request: BudgetUpdateRequest): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.apiUrl}/budgets.php/updateBudgetStatus`, request);
  }
}
