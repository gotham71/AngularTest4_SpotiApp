import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  term: string = '';

  constructor(public _spotify: SpotifyService) {}

  searchArtist() {
    if (this.term.length == 0) { return; }
    this._spotify.getArtistas(this.term).subscribe(artistas => {
      console.log(artistas);
    });
  }
}
