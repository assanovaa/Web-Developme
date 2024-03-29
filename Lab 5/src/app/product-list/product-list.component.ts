import { Component } from '@angular/core';
import { retry, share } from 'rxjs';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedFilter : string = 'None';
  productss: Product[] = products;
  filteredItems = [...products];

  share(url: string) {
    var sharelink = "https://t.me/share/url?url="+url+"&text=Hello,I wanna buy it!";
    window.open(sharelink);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  filterByCategory() {
    if(this.selectedFilter == 'None') {
      this.filteredItems = this.productss;
    } else {
      this.filteredItems = this.productss.filter(p => p.category === this.selectedFilter);
    }
  }

  setFilteredItem (event : any) {
    this.selectedFilter = event.target.value;
    this.filterByCategory();
  }

  incrementLikes(id : number) {
    products.filter(p => p.id === id).map(p => p.likes += 1)
  }

  delete(product: Product) { 
    const index = this.productss.indexOf(product); 
   
    if (index !== -1) { 
      this.productss.splice(index, 1); 
      window.alert('Product has been deleted'); 
      this.filterByCategory(); 
    } else { 
      window.alert('Product not found'); 
    } 
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/