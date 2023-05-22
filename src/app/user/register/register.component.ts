import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    rut: '',
    email: '',
    telefono: ''
  };

  confirmPassword = '';
  rutInvalid = false;
  telefonoInvalid = false;
  emailInvalid = false;
  passwordsNotMatch = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Lógica que se ejecutará al inicializar el componente
  }

  formSubmit(): void {
    if (!this.isFormValid()) {
      return;
    }

    if (this.user.password !== this.confirmPassword) {
      // Las contraseñas no coinciden
      this.passwordsNotMatch = true;
      return;
    }

    this.user.nombre = this.capitalizeFirstLetter(this.user.nombre);
    this.user.apellido = this.capitalizeFirstLetter(this.user.apellido);

    this.user.rut = this.user.rut.toUpperCase();

    this.user.username = this.user.email;

    


    console.log(this.user);
    this.userService.guardarUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Usuario guardado con éxito!!'
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error en el sistema o su usuario ya se encuentra registrado.'
        });
      }
    );
  }

  isFormValid(): boolean {
    this.rutInvalid = false;
    this.telefonoInvalid = false;
    this.emailInvalid = false;
    this.passwordsNotMatch = false;

    if (!this.user.nombre || !this.user.apellido || !this.user.rut || !this.user.email || !this.user.telefono) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos correctamente.'
      });
      return false;
    }

    const rutPattern = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]{1}$/;
    if (!rutPattern.test(this.user.rut)) {
      this.rutInvalid = true;
      return false;
    }

    // Validar el RUT según el módulo 11
    if (!this.validarRutChileno(this.user.rut)) {
      this.rutInvalid = true;
      return false;
    }

    // Validar el correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.user.email)) {
      this.emailInvalid = true;
      return false;
    }

    // Validar el número de teléfono
    const telefonoPattern = /^[0-9]{9}$/;
    if (!telefonoPattern.test(this.user.telefono)) {
      this.telefonoInvalid = true;
      return false;
    }

    return true;
  }

  validarRutChileno(rut: string): boolean {
    rut = rut.replace(/[^0-9kK]/g, ''); // Eliminar caracteres no numéricos y la letra 'k' en mayúscula o minúscula
    if (rut.length < 2) {
      return false;
    }
    const dv = rut.slice(-1); // Último dígito o dígito verificador
    const rutNumerico = parseInt(rut.slice(0, -1), 10); // Rut sin dígito verificador convertido a número

    let suma = 0;
    let multiplicador = 2;
    let temp = rutNumerico;

    while (temp > 0) {
      const digito = temp % 10;
      suma += digito * multiplicador;
      temp = Math.floor(temp / 10);
      multiplicador++;
      if (multiplicador === 8) {
        multiplicador = 2;
      }
    }

    const resto = suma % 11;
    const digitoVerificadorCalculado = 11 - resto;

    let digitoVerificador: string;
    if (digitoVerificadorCalculado === 11) {
      digitoVerificador = '0';
    } else if (digitoVerificadorCalculado === 10) {
      digitoVerificador = 'K';
    } else {
      digitoVerificador = digitoVerificadorCalculado.toString();
    }

    return dv.toUpperCase() === digitoVerificador;
  }
  capitalizeFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
