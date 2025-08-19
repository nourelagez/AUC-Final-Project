import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 profileForm=new FormGroup({
  fName:new FormControl(),
  lName:new FormControl(),
  age:new FormControl(),
  email:new FormControl(),
  password:new FormControl(),
 })

 onSubmit(){
  console.log(this.profileForm.value);
 }
}
