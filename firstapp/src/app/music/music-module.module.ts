import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicServiceService } from './music-service.service';
import { MusicComponent } from './music.component';

@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MusicServiceService
  ]
})
export class MusicModuleModule { }
