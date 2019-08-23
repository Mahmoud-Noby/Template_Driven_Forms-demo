import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getSubscribtionTypes(): Observable<string[]> {
    return of([ 'Monthly', 'Annual', 'LifeTime' ]);
  }
  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/13Bg3XRU0TrQLbUrTWsC', userSettings);
    // return of(userSettings);
  }
}
