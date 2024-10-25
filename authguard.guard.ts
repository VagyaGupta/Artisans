import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
import { Inject } from '@angular/core';

export const authguardGuard: CanActivateFn = (route, state) => {
  const sellerService = Inject(SellerService);
  return sellerService.isSellerLoggedIn;
};
