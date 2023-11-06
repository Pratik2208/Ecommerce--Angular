import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  showLogin = false;
  showError: string = '';

  constructor(private sellerService: SellerService, private router: Router) {}

  ngOnInit() {
    this.sellerService.reloadSeller();
  }

  signUp(data: SignUp): void {
    this.sellerService.userSignUp(data);
  }

  login(data: Login): void {
    this.showError = "";
    this.sellerService.userLogin(data);
    this.sellerService.isLoginError
    .subscribe((isError) => {
      if(isError){
        this.showError = 'Email or Password is incorrect';
      }
    })
  }

  onClickLogin() {
    this.showLogin = true;
  }

  onClickSignUp() {
    this.showLogin = false;
  }
  
}
