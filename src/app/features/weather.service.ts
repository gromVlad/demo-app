import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.gismeteo.net/v2/weather/current/';
  private apiKey = '56b30cb255.3443075';

  constructor(private http: HttpClient) {}

  getWeather(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Gismeteo-Token': this.apiKey,
    });

    return this.http.get<any>(
      `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=FGTzMftk3qMrLBYkBrbj6gLwWMuyycRx`,
    );
  }
}
