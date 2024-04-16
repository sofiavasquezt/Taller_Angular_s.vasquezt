import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = []; 
  promedioTemporada: number =0;
  
  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.promedioTemporadas();
    });
  }
  promedioTemporadas(): void {
    let totalSeasons = 0;
    for (let i = 0; i < this.series.length; i++) {
      totalSeasons += this.series[i].seasons;
    }
    this.promedioTemporada = totalSeasons / this.series.length;
  }
}



