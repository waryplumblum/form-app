import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm:FormGroup = this.fb.group({
    name:      ['', [Validators.required]],
    email:     ['', [Validators.required]],
    username:  ['', [Validators.required]],
    password:  ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  })

  constructor( private fb:FormBuilder ){}

  isValiedField( field:string ){
    // TODO: Obtener validación desde un servicio.
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
