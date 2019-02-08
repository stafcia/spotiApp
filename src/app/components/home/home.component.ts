import { Component, OnInit } from '@angular/core';
/* import { HttpClient } from '@angular/common/http'; */
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  /* paises: any[] = []; */
  loading: boolean;
  error: boolean;
  mensajeError: string;
  nuevasCanciones: any[] = [];
  constructor(/* private http: HttpClient */private spotify: SpotifyService) {
    /* console.log('constructor del Home Hecho');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe(  (resp: any) => {
        this.paises = resp;
      }); */
      this.loading = true;
      this.error = false;
      this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, ( errorServicio ) => {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      });

  }

  ngOnInit() {
  }

}
