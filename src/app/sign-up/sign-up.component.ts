import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.buildForms();
  }

  buildForms(){
    this.signUpForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

  registerUser(values: any){
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.invalid) return;

    let payload = {
      userName: values.userName,
      email: values.email,
      password: values.password,
      repeatPassword: values.repeatPassword
    }

    console.log(payload);

    /*
    this.adminService.postSignUp(payload).subscribe(
      (resp) => {
        if (resp.success){
          this.message = "Solicitud enviada exitosamente"
        }
      },
      (error) => {
        console.error(error);
        this.message = "¡No se ha generado la solicitud!";
      }
    );
    */
  }
}
