import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZomatoserviceService {

  cartItems: any = {
    items: []
  };
  constructor(private https:HttpClient) {

   }
   login( obj: any) {
    return this.https.post("https://freeapi.miniprojectideas.com/api/zomato/Login",obj);
   }
   getAllFoodCategory() {
    return this.https.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory");
  }
  placeOrder(obj:any) {
    return this.https.post("https://freeapi.miniprojectideas.com/api/zomato/AddNewOrder", obj);
  }
  getItemsByRestaBYCategoryName(name: string) {
    return this.https.get('https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantServingByCategoryId?categoryId='+ name)
  }
  GetFoodItemOfRestaurantByCategory(restaurantID:number,categoryId: number) {
    return this.https.get('https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemOfRestaurantByCategory?restaurantId='+ restaurantID+'&categoryId='+categoryId)
  }
  GetAllCartItemsByCustomerId(customerId:number,restaurantID: number) {
    return this.https.get('https://freeapi.miniprojectideas.com/api/zomato/GetCartItemsByCustomerIdForRestaurant?customerId='+ customerId+'&restaurantId='+restaurantID)
  }
  GetRestaurantByRestaurantId(name: number) {
    return this.https.get('https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantByRestaurantId?restaurantID='+ name)
  }
  UpdateCartQuantity(obj:any) {
    return this.https.post("https://freeapi.miniprojectideas.com/api/zomato/UpdateCartQuantity", obj);
  }
  addToCart(obj:any) {
    return this.https.post("https://freeapi.miniprojectideas.com/api/zomato/AddToCart", obj);
  }
}
