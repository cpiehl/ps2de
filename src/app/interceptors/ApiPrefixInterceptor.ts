import { AppConfigService } from '../services/app.config.service';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  constructor(private readonly appConfig: AppConfigService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (!/^(http|https):/i.test(request.url) && !request.url.toLowerCase().startsWith("/assets") && !request.url.toLowerCase().startsWith("assets/")) {
        request = request.clone({ url: this.appConfig.getServerUrl() + request.url });
    }

    return next.handle(request);
  }
}