import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: "app-movies-details",
  templateUrl: "./movies-details.page.html",
  styleUrls: ["./movies-details.page.scss"]
})
export class MoviesDetailsPage implements OnInit {
  info = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.movieService.getDetails(id).subscribe(result => {
      console.log("details: ", result);
      this.info = result;
    });
  }

  openWebsite() {
    window.open(this.info.Website, '_blank');
  }
}
