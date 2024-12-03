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

  genderTypes = [
    {id: 'check-male', value: 'male', display:'Male'},
    {id: 'check-female', value: 'female', display:'Female'},
    {id: 'check-other', value: 'other', display:'Prefer not to say'}
    ];
  @ViewChild('registerationForm')  registerationForm:NgForm;
  @ViewChild('uname') uname:NgModel;
  onFormSubmitted(){
    console.log(this.registerationForm);
    console.log(this.registerationForm.controls['firstname'].value);
    console.log(this.registerationForm.value.lastname);
  }
  GenerateUserName(){
    console.log(this.firstName+this.lastName+this.dob.substr(0,4));
    //this.uname.setvalue=
    console.log(this.uname.value);
  }
}
