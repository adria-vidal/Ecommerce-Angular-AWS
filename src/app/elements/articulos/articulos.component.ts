import { Component, OnInit } from '@angular/core';
import { ConsultasapiService } from 'src/app/services/consultasapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent implements OnInit {
  // claveCategory: any = sessionStorage.getItem('idCategory');
  articulos: any;
  id: any = null;


  constructor(
    private consulta: ConsultasapiService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.consulta.getProductsByCategory(this.claveCategory).subscribe((result) => {
    //   this.articulos = result;
    //   console.log(result);
    
    this.id = this._route.snapshot.paramMap.get('id');
    this.consulta.getProductsByCategory(this.id)
    .subscribe(result => this.articulos = result)
    console.log(this.articulos);


  }
}
