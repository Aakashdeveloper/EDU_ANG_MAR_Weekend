import { Component, OnInit } from '@angular/core';
import { IMusic } from './music.model';
import { MusicServiceService } from './music-service.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  music: any[];

  constructor(private _music: MusicServiceService) { }

  ngOnInit(): void {
    this._music.getArtits()
      .subscribe((data) => { this.music = data[0].artists; console.log('>>>', data[0].artists)});
  }

}
