import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    document.getElementById('ibIniciarSesion').addEventListener('click', (ev) => this.iniciarSesion());
  }

  iniciarSesion() {
    this.router.navigateByUrl('/home');
  }

}
