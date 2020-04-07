import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private appConfig;
  private apiConfig;

  constructor(private http: HttpClient) {}

  loadAppConfig() {
    return this.http
      .get('/assets/data/app.config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  loadApiConfig() {
    return this.http
      .get('/assets/data/api.config.json')
      .toPromise()
      .then(data => {
        this.apiConfig = data;
      });
  }

  getServerUrl(): string {
    return this.appConfig.baseUrl;
  }

  getApiKey(): string {
    return this.apiConfig.key;
  }
}