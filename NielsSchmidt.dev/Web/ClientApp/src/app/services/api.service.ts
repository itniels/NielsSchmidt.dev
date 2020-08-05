import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public Get(endpoint: string) {
    return this.http.get(endpoint).toPromise();
  }

  public Post(endpoint: string, data: any) {
    return this.http.post(endpoint, data).toPromise();
  }

  public GetData<T>(endpoint: string): Promise<T> {
    return this.http.get<T>(endpoint).toPromise()
      .then((data) => { return data; });
  }

  public PostData<T>(endpoint: string, data: any): Promise<T> {
    return this.http.post<T>(endpoint, data).toPromise()
      .then((data) => { return data; });
  }
}
