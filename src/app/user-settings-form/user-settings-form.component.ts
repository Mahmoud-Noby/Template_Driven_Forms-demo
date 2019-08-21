import { Component, OnInit } from '@angular/core';
import { UserSettings } from './app-data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: null ,
    emailOffer: null,
    interfaceStyle:  null,
    subscriptionType:  null,
    notes: null,
  }
  userSettings: UserSettings = {...this.originalUserSettings};
  constructor() { }

  ngOnInit() {
  }

}
