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

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export default class ForgetPasswordComponent implements OnInit {
  fb = inject(FormBuilder);
  forgetForm!: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);


  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  submit() {
    // console.log('forgetForm', this.forgetForm.value.email);
    this.authService.sendEmailServices(this.forgetForm.value.email).subscribe({
      next: (res) => {
        alert(res.message);
        this.forgetForm.reset();
        // this.router.navigate([''])

      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
}
