import {
  Component,
  computed,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { FlowbiteService } from '../../core/servcies/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/servcies/auth.service';
import { CartService } from '../../core/servcies/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent implements OnInit {
  private readonly _AuthServices = inject(AuthService);
  constructor(private _Flowbiteservices: FlowbiteService) {}
  private readonly _CartService = inject(CartService);
  cartItem: Signal<number> = computed(() => this._CartService.cartNumber());
  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next: (res) => {
        this._CartService.cartNumber.set(res.numOfCartItems);
      },
    });
    this._Flowbiteservices.loadFlowbite(() => {});
  }
  logOut(): void {
    this._AuthServices.logOut();
  }
}
