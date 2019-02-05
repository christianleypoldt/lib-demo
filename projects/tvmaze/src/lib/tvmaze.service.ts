import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPagination } from '../public_api';
import { HttpClient } from '@angular/common/http';


/**
 * Brukes til bla bla bla
 */
@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  /**
   * @ignore
   */
  private readonly apiRoot = 'https://reqres.in/api';

  /**
   * @ignore
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Denne metoden brukes til å hente brukere pr side
   * @param page  Sidetallet for pageneringen
   * @param somethingElse  Tester dokumentasjon med en ekstra param
   * @example
   * tvmazeService.getPagedUsers(1, "Hello World");
   * @returns Side med paginering-metadata og brukere
   */
  getPagedUsers(page: number, somethingElse?: string): Observable<UserPagination> {
    const url = `${this.apiRoot}/users?page=${page}`;
    return this.http.get<UserPagination>(url);
  }
}
