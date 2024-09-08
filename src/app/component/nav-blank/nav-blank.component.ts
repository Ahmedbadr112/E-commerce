import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  Signal,
} from '@angular/core';
import { FlowbiteService } from '../../core/servcies/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/servcies/auth.service';
import { CartService } from '../../core/servcies/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss'],
})
export class NavBlankComponent implements OnInit, OnDestroy {
  private readonly _AuthServices = inject(AuthService);
  private readonly _CartService = inject(CartService);
  private cartSubscription!: Subscription;

  constructor(private _Flowbiteservices: FlowbiteService) {}

  cartItem: Signal<number> = computed(() => this._CartService.cartNumber());

  isNavbarOpen = false;

  ngOnInit(): void {
    // Subscribe to cart data
    this.cartSubscription = this._CartService.getCart().subscribe({
      next: (res) => {
        this._CartService.cartNumber.set(res.numOfCartItems);
      },
      error: (err) => console.log(err),
    });

    // Load Flowbite functionality
    this._Flowbiteservices.loadFlowbite(() => {});
  }

  ngOnDestroy(): void {
    // Unsubscribe from cart data when the component is destroyed
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  logOut(): void {
    this._AuthServices.logOut();
  }

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
    const navbar = document.getElementById('navbar-default');
    if (this.isNavbarOpen) {
      navbar?.classList.remove('hidden');
    } else {
      navbar?.classList.add('hidden');
    }
  }
}
