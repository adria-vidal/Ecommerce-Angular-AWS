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
  pag: any = undefined;


  constructor(
    private consulta: ConsultasapiService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.consulta.getProductsByCategory(this.claveCategory).subscribe((result) => {
    //   this.articulos = result;
    //   console.log(result);
    this.pag = this._route.snapshot.paramMap.get('pag');
    this.id = this._route.snapshot.paramMap.get('id');
    this.consulta.getProductsByCategory(this.id,this.pag)
    .subscribe(result => this.articulos = result)
    console.log(this.articulos);


  }
}
