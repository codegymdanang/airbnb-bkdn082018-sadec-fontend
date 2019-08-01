import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first,  } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  isSame = true;
  isDirty = false;
  isExist = false;
  loading = false;
  user: User = new User();

  constructor(
      private router: Router,
      private userService: UserService,
  ) { }

  ngOnInit() { }

  onSubmit(form: FormGroup) {
      this.submitted = true;
      this.loading = true;
      if (form.invalid || !this.isSame) {
          return;
      }
      this.userService.checkUserIsExist(this.user.tenNguoiDung)
      .subscribe(
          isExist => { 
            if (isExist) {
              this.isExist = true;
              this.submitted = false;
              this.loading = false;
              return;
            } else {
              this.userService.register(this.user)
              .subscribe(
                  data => {
                      this.router.navigate(['/login']);
                  })
            };
          })
  }

  onUsernameKeyUp() {
      this.isExist = false;
  }

  onRePWKeyUp(re_pw, pw) {
      this.isDirty = true;
      if (re_pw == pw) {
        this.isSame = true;
      }
      else {
        this.isSame = false;
      }
  }
}