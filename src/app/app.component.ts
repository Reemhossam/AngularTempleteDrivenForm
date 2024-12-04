import { CommonModule } from '@angular/common';
import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTempleteDrivenForm';
  firstName:string = '';
  lastName:string = '';
  Email:string = '';
  dob: string= '';
  gender:string='';
  country:string='';
  city:string='';
  region:string='';
  postal:string='';
  userName:string='';
  isAgreed:boolean=false;

  genderTypes = [
    {id: 'check-male', value: 'male', display:'Male'},
    {id: 'check-female', value: 'female', display:'Female'},
    {id: 'check-other', value: 'other', display:'Prefer not to say'}
    ];
  @ViewChild('registerationForm')  registerationForm:NgForm;
  @ViewChild('uname') uname:NgModel;
  onFormSubmitted(){
     console.log(this.registerationForm);

      this.firstName = this.registerationForm.controls['firstname'].value;
      this.lastName = this.registerationForm.controls['lastname'].value;
      this.Email = this.registerationForm.controls['email'].value;
      this.dob = this.registerationForm.controls['dob'].value;
      this.gender = this.registerationForm.value.gender;
      this.country = this.registerationForm.value.address.country;
      this.city = this.registerationForm.value.address.city;
      this.region = this.registerationForm.value.address.region;
      this.postal = this.registerationForm.value.address.postal;
      this.userName = this.registerationForm.value.username;


     //this.registerationForm.reset();
     this.registerationForm.form.patchValue({
      gender: 'male',
      address: {
        country:'Japan'
      }
     })
    // console.log(this.registerationForm.controls['firstname'].value);
    // console.log(this.registerationForm.value.lastname);
  }
  GenerateUserName(){
    let uName='';
    if (this.firstName.length>=3)
      uName += this.firstName.slice(0,3);
    else
    uName += this.firstName;

    if (this.lastName.length>=3)
      uName += this.lastName.slice(0,3);
    else
    uName += this.lastName;
    uName += new Date(this.dob).getFullYear();
    uName = uName.toLowerCase();

    // this.registerationForm.controls['username'].setValue (userName);
    // this.registerationForm.setValue({
    //   address: {
    //     street1: this.registerationForm.value.address.street1,
    //     street2: this.registerationForm.value.address.street2,
    //     country: this.registerationForm.value.address.country,
    //     city: this.registerationForm.value.address.city,
    //     region: this.registerationForm.value.address.region,
    //     postal:this.registerationForm.value.address.postal,
    //   },
    //   dob: this.registerationForm.value.dob,
    //   email: this.registerationForm.value.email,
    //   firstname: this.registerationForm.value.firstname,
    //   gender: this.registerationForm.value.gender,
    //   lastname: this.registerationForm.value.lastname,
    //   phone: this.registerationForm.value.phone,
    //   username: userName
    // })

    this.registerationForm.form.patchValue({
      username: uName,
      // address: {
      //   country:'Japan'
      // }
    })
  }
}
