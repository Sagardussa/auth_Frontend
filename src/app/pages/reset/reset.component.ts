import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { confirmPasswordvalidator } from '../../validators/confirm-password.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss',
})
export default class ResetComponent implements OnInit {
  fb = inject(FormBuilder);
  resetForm!: FormGroup;
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  token!: string;
  authService = inject(AuthService);

  ngOnInit(): void {
    this.resetForm = this.fb.group(
      {
        password: ['', Validators.required],
        confirPassword: ['', Validators.required],
      },
      {
        validator: confirmPasswordvalidator('password', 'confirPassword'),
      }
    );

    this.activatedRoute.params.subscribe((val) => {
      this.token = val['token'];
      console.log('token', this.token);
    });
  }

  reset() {
    // console.log('resetForm', this.resetForm.value);
    const resetObj = {
      token : this.token,
      password:this.resetForm.value.password
    }
    console.log("resetObj",resetObj);
    
    this.authService.resetPasswordServices(resetObj).subscribe({
      next: (res) => {
        alert(res.message);
        this.resetForm.reset();
        this.router.navigate(['login'])
      },
      error: (err) => {
        console.log("err reset",err);
        
        alert(err.error.message);
      },
    });
  }
}
