import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private username: string;
  private password: string;

  constructor(private router: Router) { }

  ngOnInit() {
    document.getElementById('ibIniciarSesion').addEventListener('click', (ev) => this.iniciarSesion());
  }

  iniciarSesion() {
    if (!this.validateCredentials()) {
      return;
    }

    this.router.navigateByUrl('/home');
  }

  validateCredentials(): boolean {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);

    return this.username == 'admin' && this.password == 'pass';
  }
  
}
