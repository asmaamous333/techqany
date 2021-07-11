import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {
 shippingForm:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   this.shippingForm= this.fb.group({
     name: ['',[Validators.required]],
     email:['',[Validators.required]],
     phoneNumber:['',Validators.required]

   })
  }

}
