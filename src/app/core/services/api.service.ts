import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "https://60d5a2c2943aa60017768b01.mockapi.io";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUrl(subUrl: string) {
    return `${baseUrl}/${subUrl}`
  }

  get(subUrl: string): Observable<any> {
    const url = this.getUrl(subUrl);
    return this.http.get(url);
  }

  post(subUrl: string, req: any) {
    const url = this.getUrl(subUrl);
    return this.http.post(url, req);
  }

  put(subUrl: string, req: any) {
    const url = this.getUrl(subUrl);
    return this.http.put(url, req);
  }

  delete(subUrl: string) {
    const url = this.getUrl(subUrl);
    return this.http.delete(url);
  }
}
