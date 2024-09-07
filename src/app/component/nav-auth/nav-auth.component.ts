import { Component, inject, OnInit } from '@angular/core';
import { FlowbiteService } from '../../core/servcies/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../core/servcies/cart.service';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss',
})
export class NavAuthComponent implements OnInit {
  constructor(private _Flowbiteservices: FlowbiteService) {}
  ngOnInit(): void {
    this._Flowbiteservices.loadFlowbite(() => {});
  }

}
