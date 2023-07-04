import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  upload() {
    document.getElementById('input')?.click();
  }

  headeritems = ['Main Category', 'Sub Category',];
  items = [{Maincategory: 'Aviation Security', Subcategory: 'Security'},
{Maincategory: 'Electronics Personnel Communications', Subcategory:'Communications'},
{Maincategory: 'OPS Instrument', Subcategory:'ICAO PANS'},
{Maincategory: 'Airport Fire Safety', Subcategory:'Fire Safety'},
{Maincategory: 'Aviation Management', Subcategory:'Aviation Management'},]

}
