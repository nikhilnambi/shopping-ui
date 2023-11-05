import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  //user signup

  userData(item:any){
    return this.http.post("https://shopping-backend-0cmu.onrender.com/insert",{"userdata":item})
    .subscribe(data=>{console.log(data)})
  }


    //seller signup

    sellerData(item:any){
      return this.http.post("https://shopping-backend-0cmu.onrender.com/add",{"sellerdata":item})
      .subscribe(data=>{console.log(data)})
    }


  //user-login

  _url = 'https://shopping-backend-0cmu.onrender.com/login';
  
  loginUser(user:any){
     return this.http.post<any>(this._url,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  
  }

  getData(){
    return sessionStorage.getItem('user');
  }

  //seller-login

 
  
  loginSeller(seller:any){
     return this.http.post<any>('https://shopping-backend-0cmu.onrender.com/sellerlogin',seller)
  }


}