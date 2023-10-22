import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    ButtonModule,
    TooltipModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
