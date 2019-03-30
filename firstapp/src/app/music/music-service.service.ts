import { Injectable } from '@angular/core';
import { IMusic } from './music.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  title = 'hii';
  musicUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';

  constructor(private _http: HttpClient) {}

  getArtits(): Observable<any[]> {
        return this._http.get<any[]>( `${this.musicUrl}`);
  }
}
