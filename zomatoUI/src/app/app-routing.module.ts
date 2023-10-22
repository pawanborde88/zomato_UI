import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CatogariesComponent } from './components/catogaries/catogaries.component';
import { RestorentItemsComponent } from './components/restorent-items/restorent-items.component';
import { SelectedFoodComponent } from './components/selected-food/selected-food.component';
import { CreateorderComponent } from './components/createorder/createorder.component';
import { FoodsComponent } from './components/foods/foods.component';

const routes: Routes = [
  {
    path:'*',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children :[
      {
        path:'foodCategory',
        component: CatogariesComponent
      },
      {
        path:'restaurant-items/:categoryname',
        component: RestorentItemsComponent
      },
      {
        path:'select-items/:restaurantId/:categoryId',
        component: SelectedFoodComponent
      },
      {
        path:'create-order',
        component: CreateorderComponent
      },
      {
        path:'foods',
        component:FoodsComponent
      },
      {
        path:'createorder',
        component:CreateorderComponent
      },
      {
        path:'selectedfood',
        component:SelectedFoodComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
