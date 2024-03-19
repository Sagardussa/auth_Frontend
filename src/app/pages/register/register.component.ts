import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { confirmPasswordvalidator } from '../../validators/confirm-password.validator';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export default class RegisterComponent implements OnInit {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router)

  // constructor(private formBuilder: FormBuilder  ) {
  // }

  registerdform!: FormGroup;

  ngOnInit(): void {
    this.registerdform = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        userName: ['', Validators.required],
        password: ['', Validators.required],
        confirPassword: ['', Validators.required],
      },
      {
        validator: confirmPasswordvalidator('password', 'confirPassword'),
      }
    );
  }

  register() {
    this.authService.registerServices(this.registerdform?.value)?.subscribe({
      next: (res) => {
        alert(res.message)
        this.registerdform.reset();
        this.router.navigate(['login']);

      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
}
