import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQBKPhu_QDRmjjQP5x3smmodtbiZvGjv0U2MYFY25uXNpwCqt2tW7TRQX9d9hTXysE4w0Ov4kB1-EnVRD4s';

  constructor(public http: HttpClient) {
    console.log('Spotify service ready');
  }

  private getHeaders() {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getTop( id: string ) {
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;

    let headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

  getArtist( id: string) {
    let url = `${ this.urlSpotify }artists/${ id }`;

    let headers = this.getHeaders();
    return this.http.get(url, { headers });
    //   .map( (response: any) => {
    //   this.artistas = response.artists.items;
    //   return this.artistas;
    // });
  }

  getArtists(term: string) {
    let url = `${ this.urlSpotify }search?query=${ term }&type=artist&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers }).map( (response: any) => {
      this.artistas = response.artists.items;
      return this.artistas;
    });
  }
}
