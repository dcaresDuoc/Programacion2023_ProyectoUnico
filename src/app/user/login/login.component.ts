import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Credentials } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  @Output() registerClicked: EventEmitter<void> = new EventEmitter<void>();

  reloadPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }

  creds: Credentials = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router  ){ }
    onRegisterClick() {
      // Emitir evento de registro
      this.registerClicked.emit();
    }
  
    login(form: NgForm){
      console.log('form value',form.value);
      this.registerClicked.emit();
      this.authService.login(this.creds)
      .subscribe(
        (data) => {
          console.log(data, 'hola');
          const token_payload = data['token'];
          const role_user = (this.authService.extractUserRole(token_payload));
          const username = data['Username']
          this.authService.setUserRole(role_user!);
          this.authService.setUserName(username!);
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Usuario logueado con éxito!!'
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema en el logueo.'
          });
        }
      );
    }
}
