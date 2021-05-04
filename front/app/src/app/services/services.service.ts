import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay, map, tap, retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


const apiUrl = environment.apiEndPoint;

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(
    private http: HttpClient
  ) {

  }

  public getQuery<T>(query, respType?: any) {
    //query = `${apiUrl}/${query}`;
    query = `/${query}`;

    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });

    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Content-Type': 'application/json'
    });


    if (!respType) {
      respType = 'json';
    }
    return this.http.get<T>(query, { headers, responseType: respType })
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }
  public postQuery<T>(body, file, respType?: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // let headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Methods': 'POST, OPTIONS',
    //   'Content-Type': 'application/json'
    // });
    // responseType: 'arraybuffer' | 'blob' | 'json' | 'text'
    if (!respType) {
      respType = 'json';
    }
    //const url = `${apiUrl}/${file}`;
    const url = `/api/${file}`;
    //const url = `${file}`;
    return this.http.post<T>(url, body, { headers, responseType: respType })
      .pipe(
        tap((data: any) => data),
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un Error:', error.error.message);
    }
    else {
      console.error(`Código devuelto de backend ${error.status},` + `cuerpor era: ${error.error}`);
    }
    return throwError(`Algo malo ha sucedido. Por favor inténtelo más tarde (error: ${error.status})`);
  }


}
