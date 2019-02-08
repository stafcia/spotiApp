import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
   }

   getQuery( query: string ) {
      const url =  `https://api.spotify.com/v1/${ query }`;
      const headers = new HttpHeaders({
        // tslint:disable-next-line:max-line-length
        'Authorization' : 'Bearer BQDQ3STM0cDuK-dyTB-IG1SBW8ShPLswqDTQT8k1BdNrQGhc-x8dIq_e_GF2rf-6EG99i69f30rlXzqmez0'
      });
      return this.http.get(url, {headers});
   }

   getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => data['albums'].items ));
   }

   getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
     .pipe( map(data =>  data['artists'].items ));
   }

   getArtista(id: string) {
    return this.getQuery(`artists/${ id } `);
   }
   getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=MX`)
    .pipe( map(data =>  data['tracks'] ));
   }

}
