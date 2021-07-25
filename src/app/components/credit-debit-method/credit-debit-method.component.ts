import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-debit-method',
  templateUrl: './credit-debit-method.component.html',
  styleUrls: ['./credit-debit-method.component.scss']
})
export class CreditDebitMethodComponent implements OnInit {
  creditCardForm: any;
  
  constructor(private fb :FormBuilder) {
   }

  ngOnInit(): void {
    this.creditCardForm=this.fb.group({
      cardNum:['',[Validators.required]],
      cvv:['',[Validators.required,Validators.maxLength(3)]],
      expireDate:['',[Validators.required]],
      cardHodlerName:['',[Validators.required]]
    })
  }

}
