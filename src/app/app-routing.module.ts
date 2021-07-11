import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { BrandsComponent } from './components/brands/brands.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'payment-details', component: PaymentDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-details', component: SingleProductComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'result', component: SearchResultComponent },
  { path: 'wish-list', component: WishListComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  {path:'cart',component:CartComponent},
  {path:'shipping-details',component:ShippingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
