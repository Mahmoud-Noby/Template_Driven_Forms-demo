import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null ,
    emailOffer: null,
    interfaceStyle:  null,
    subscriptionType:  null,
    notes: null,
};
userSettings: UserSettings = {...this.originalUserSettings};
  postError = false;
  postErroeMesaage = '';
  subscribtionTypes: Observable<string[]>;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.subscribtionTypes = this.dataService.getSubscribtionTypes();
  }
  onHttpErrors(errorResponse: any) {
    console.log('errors: ', errorResponse);
    this.postError = true;
    this.postErroeMesaage = errorResponse.error.postingError;
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('onubmit: ' + form.valid);
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('Sucess', result),
      error => this.onHttpErrors(error),
      ); } else {
        this.postError = true;
        this.postErroeMesaage = 'Please Fix bove Errors';
      }
    }

}
