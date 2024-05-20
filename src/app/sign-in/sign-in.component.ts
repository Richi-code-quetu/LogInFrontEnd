import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup;

  message: String = "";

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.buildForms();
  }

  buildForms(){
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  collectUserData(values: any){
    this.signInForm.markAllAsTouched();
    if (this.signInForm.invalid) return;

    let payload = {
      email: values.email,
      password: values.password
    }

    console.log(payload)
    /*
    this.adminService.postSignIn(payload).subscribe(
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
