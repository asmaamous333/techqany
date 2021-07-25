import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile-drop-down',
  templateUrl: './user-profile-drop-down.component.html',
  styleUrls: ['./user-profile-drop-down.component.scss']
})
export class UserProfileDropDownComponent implements OnInit {

@Output() hover =new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
