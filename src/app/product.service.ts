import { Observable } from 'rxjs';
import {Product} from './product'


export class ProductService{
   public getProducts() {
       let products:Product[];
        products=[
            new Product(1,'Samsung Galaxy S9',6000),
            new Product(2,'iPhone X',6500),
            new Product(3,'OnePlusOne 5',5500)
        ]
        return products;               
    }
    public getProduct(id) {
        let products:Product[]=this.getProducts();
        return products.find(p => p.productID==id);
   }
}
