import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { BrandsComponent } from './components/brands/brands.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactUsComponent,
    ThankYouComponent,
    AboutUsComponent,
    FooterComponent,
    NotificationsComponent,
    PaymentDetailsComponent,
    HomeComponent,
    LoginComponent,
    SingleProductComponent,
    BrandsComponent,
    SearchResultComponent,
    WishListComponent,
    MyOrdersComponent,
    CartComponent,
    OrderSummaryComponent,
    ShippingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
