import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  getArtistas(term: string) {
    let url = `https://api.spotify.com/v1/search?query=${ term }&type=artist&limit=20`;

    let headers = new HttpHeaders({
      'authorization': 'Bearer BQBpfLkfO7ClTiWs1JprRj7OYBRPxdMTVj2xpw1G3GGJblCBF2tSLtjyFdU7kH6VOfmqocjvb4tnapKq6aQ'
    });

    return this.http.get(url, { headers }).map( (response: any) => {
      this.artistas = response.artists.items;
      return this.artistas;
    });
  }

}
