import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form_task_Day_8_t2';


  myForm = new FormGroup({
    name:new FormControl(''),
    lname:new FormControl(''),

    address : new FormGroup({
      street:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      zip:new FormControl(''),
    })

  });

  updateProfile() {
    this.myForm.patchValue({
      name: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

}
