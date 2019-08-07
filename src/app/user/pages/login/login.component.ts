import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loading = false;
  loginForm: FormGroup;
  returnUrl: string;
  error = false;
  constructor(
    private authenticationService:  AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',Validators.required]
    }),
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.isLoggedIn()) this.router.navigate(['']);
  }

  get f() { return this.loginForm.controls; }

  isLoggedIn() {
    if (this.authenticationService.isTokenExpired()) return false;
    else return true;
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    if (!this.isLoggedIn()) {
      this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = true;
          this.loading = false;
        })
    } 
    else {
      this.router.navigate(['']);
    }
  }
}
