import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';

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

  constructor(private dataService: DataService) { }

  
  onSubmit(form:NgForm){
    console.log('onubmit: ' + form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log( "Success" , result ),
      error  => console.log("error" , error)
      );
    }
    
    ngOnInit() {
    }
}
