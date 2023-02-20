import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { base_url } from './api-route';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private httpClient: HttpClient) { }

  get(url: any) {
     let apiUrl = base_url + url;
   
    return new Promise((resolve, reject) => {
      this.httpClient.get(apiUrl).subscribe(
        (res: any) => {
          resolve(res);
        }
      );
    });
  }


  post(url: any, data: any) {
    let apiUrl = base_url + url;
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer' + ' ' + localStorage.getItem('access_token')
    );
    return new Promise((resolve, reject) => {
      this.httpClient.post(apiUrl, data, { headers: headers }).subscribe(
        (res: any) => {
          resolve(res);
        },
        (err: any) => {
          reject(err);
        }
      );
    });
  }

  put(url: any, data: any) {
    let apiUrl = base_url + url;
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer' + ' ' + localStorage.getItem('access_token')
    );
    return new Promise((resolve, reject) => {
      this.httpClient.put(apiUrl, data, { headers: headers }).subscribe(
        (res: any) => {
          resolve(res);
        },
        (err: any) => {
          reject(err);
        }
      );
    });
  }

  delete(url: any) {
    let apiUrl = base_url + url;
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer' + ' ' + localStorage.getItem('access_token')
    );
    return new Promise((resolve, reject) => {
      this.httpClient.delete(apiUrl, { headers: headers }).subscribe(
        (res: any) => {
          resolve(res);
        },
        (err: any) => {
          reject(err);
        }
      );
    });
  }
}
