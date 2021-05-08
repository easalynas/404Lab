import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay, map, tap, retry, catchError, filter, withLatestFrom } from 'rxjs/operators';
import { of, throwError, Observable } from 'rxjs';
import { IUsuario } from '../interfaces/usuario-interface';


const apiUrl = environment.apiEndPoint;
const apiUrlFirebase = environment.apiEndPointAppSocial;

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
    if (!respType) {
      respType = 'json';
    }
    //const url = `${apiUrl}/${file}`;
    const url = `/api/${file}`;
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
