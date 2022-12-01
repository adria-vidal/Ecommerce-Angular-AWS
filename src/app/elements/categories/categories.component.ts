import { Component, OnInit } from '@angular/core';
import { ConsultasapiService } from 'src/app/services/consultasapi.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private consulta: ConsultasapiService) {}

  categories: any;

  ngOnInit() {
    this.consulta.getCategory().subscribe((result) => {
      console.log(result);
      this.categories = result;
    });
  }

  

}
