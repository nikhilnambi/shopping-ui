import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private http:HttpClient) { }
  

  //seller adding product
  productData(item:any){
    return this.http.post("https://shopping-backend-0cmu.onrender.com/add-product",{"productdata":item})
    .subscribe(data=>{console.log(data)})
  }

  getsellerProducts(sellerid:any){
    
    return this.http.get("https://shopping-backend-0cmu.onrender.com/get-seller-products/"+sellerid)
    
  }

  getsellerProduct(_id:any){
    return this.http.get("https://shopping-backend-0cmu.onrender.com/get-seller-product/"+_id)
  }

  deleteProduct(_id:any){
    return this.http.get("https://shopping-backend-0cmu.onrender.com/deleteProduct/"+_id)
  }

  updateProduct(item:any){
    return this.http.put("https://shopping-backend-0cmu.onrender.com/updateProduct",item)
    .subscribe(data=>{
      console.log(data);
    })
  }

  //user functions

  //products to user page

  getuserProduct(){
    return this.http.get("https://shopping-backend-0cmu.onrender.com/get-user-product")
  }

  getcartProduct(_id:any){
     return this.http.get("https://shopping-backend-0cmu.onrender.com/get-cart-product/"+_id)
  }

  addToCart(cartData:any){
    return this.http.post("https://shopping-backend-0cmu.onrender.com/add-to-cart",{"cartdata":cartData})
    .subscribe(data=>{console.log(data)})
  }
   
  getCarts(userid:any){
  
    return this.http.get("https://shopping-backend-0cmu.onrender.com/cartproducts/"+userid);

  }

  deletecartproduct(_id:any){
    return this.http.get("https://shopping-backend-0cmu.onrender.com/deletecartproduct/"+_id)
  }

}
