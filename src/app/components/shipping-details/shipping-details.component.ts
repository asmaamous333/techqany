import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {
 shippingForm:any;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
   this.shippingForm= this.formBuilder.group({
     name:

   })
  }

}
