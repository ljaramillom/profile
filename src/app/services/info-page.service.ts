import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  download = false;

  constructor(private http: HttpClient) {
    // read json data-page
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: InfoPage) => {
        this.download = true;
        this.info = resp;
      });
  }
}
