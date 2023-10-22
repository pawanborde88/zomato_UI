import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './components/foods/foods.component';
import { RestaurantFoodItemComponent } from './components/restaurant-food-item/restaurant-food-item.component';
import { RestaurantServingFoodComponent } from './components/restaurant-serving-food/restaurant-serving-food.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CreateorderComponent } from './components/createorder/createorder.component';
import { CatogariesComponent } from './components/catogaries/catogaries.component';
import { RestorentItemsComponent } from './components/restorent-items/restorent-items.component';
import { SelectedFoodComponent } from './components/selected-food/selected-food.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    RestaurantFoodItemComponent,
    RestaurantServingFoodComponent,
    LoginComponent,
    LayoutComponent,
    CreateorderComponent,
    CatogariesComponent,
    RestorentItemsComponent,
    SelectedFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
