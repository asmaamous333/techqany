import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-shipping-details-dialog',
  templateUrl: './user-shipping-details-dialog.component.html',
  styleUrls: ['./user-shipping-details-dialog.component.scss']
})
export class UserShippingDetailsDialogComponent implements OnInit {

  
  shippingAddressDetails:any;
  constructor(private fb :FormBuilder,public dialogRef:MatDialogRef<UserShippingDetailsDialogComponent>) { }

  ngOnInit(): void {
    this.shippingAddressDetails=this.fb.group({
      name:['',[Validators.required]],
      address:['',[Validators.required]],
      apartment:['',[Validators.required]],
      city:['',[Validators.required]],
      area:['',[Validators.required]],
      deliveryInstructions:['',[Validators.required]]

    })
  }

}
