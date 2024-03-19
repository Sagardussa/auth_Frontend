import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export default class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  // constructor(private formBuilder: FormBuilder  ) {
  // }

  loginform!: FormGroup;

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }
  login() {
    // console.log(this.loginform.value);
    this.authService.loginServices(this.loginform?.value).subscribe({
      next: (res) => {
        // alert('login is success');
        alert(res.message)
        localStorage.setItem("user_id",res.data._id);
        this.authService.isLoggedIn$.next(true)
        this.router.navigate(['products']);
        this.loginform.reset();
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }
}
