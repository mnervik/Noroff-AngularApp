import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private url_dog = 'https://dog.ceo/api/breeds/image/random';
  private url_fox = 'https://randomfox.ca/floof/';
  private url_catCode = 'https://http.cat/';
  private url_shibes = 'http://shibe.online/api/shibes';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {
  }

  getRandomShibe() {
    return this.http.get(this.conversionUrl + this.url_shibes).pipe(
      map(response => {
        return response.json();
      })
    );
  }

  getRandomDog(): Observable<any[]> {
    return this.http.get(this.conversionUrl + this.url_dog).pipe(
      map(response => {
        return response.json();
      })
    );
  }

  getRandomFox(): Observable<any[]> {
    return this.http.get(this.conversionUrl + this.url_fox).pipe(
      map(response => {
        return response.json();
      })
    );
  }

  /* "String" causes lint-error, but "string" does not */
  getCatCode(code = -1): string {
    const catCodes: Array<number> = [
      100, 101, 200, 201, 202, 204, 206, 207, 300, 301, 302, 303, 304, 305, 307, 400, 401, 402, 403, 404, 405, 406, 408,
      409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 429, 431, 444, 450, 451, 500,
      502, 503, 504, 506, 507, 508, 509, 510, 511, 599
    ];

    if(code === -1 || catCodes.indexOf(code) === -1){
      code = catCodes[Math.floor(Math.random() * catCodes.length)];
    }

    return this.url_catCode + code;
  }
}
