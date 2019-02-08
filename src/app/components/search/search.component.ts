import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
    constructor(private spotify: SpotifyService) { }
  loading: boolean;
  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe(
      data => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      }
    );
  }

}
