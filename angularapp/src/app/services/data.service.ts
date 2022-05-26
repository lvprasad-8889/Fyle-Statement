import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public limit = new BehaviorSubject<number>(10);

  public displayRequiredRepositories = false;

  // display required repositories only
  displayRepositories(){
    this.displayRequiredRepositories=!this.displayRequiredRepositories
  }

  constructor(private httpClient: HttpClient) {}
  //access variable
  getLimit() {
    return this.limit.value;
  }
  //update the value of limit variable
  changeLimit(limit: number) {
    this.limit.next(limit);
  }
  //http request to server to get intial data
  getSufficientData(page: number): Observable<any> {
    return this.httpClient.get(
      `/user/userData?page=${page}&limit=${this.getLimit()}`
    );
  }
  //http request to server to get repositories
  getRepositories(page: number, limit: number): Observable<any> {
    return this.httpClient.get(
      `/user/getRepositories?page=${page}&limit=${limit}`
    );
  }
  //http request to server to get necessary repositories
  getRequiredRepository(repository: string): Observable<any> {
    return this.httpClient.get(
      `/user/requiredRepository/${repository}`
    );
  }
}
