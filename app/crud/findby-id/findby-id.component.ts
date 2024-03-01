import { Component } from '@angular/core';
import { product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-findby-id',
  templateUrl: './findby-id.component.html',
  styleUrl: './findby-id.component.css'
})
export class FindbyIDComponent {
  product:product = new product();
  onSubmit() {
    console.log(product);
    
    }
}
