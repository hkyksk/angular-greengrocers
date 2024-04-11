import { Component } from '@angular/core'
import { CartService } from '../cart.service'
import { Item } from '../models/item'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Item[] = []

  constructor(public cartService: CartService) { 
    this.cartItems = this.cartService.getCartItems()
  }

  increaseQuantity(item: Item): void {
    this.cartService.increaseItemQuantity(item)
    this.cartItems = this.cartService.getCartItems()
  }

  decreaseQuantity(item: Item): void {
    this.cartService.decreaseItemQuantity(item)
    this.cartItems = this.cartService.getCartItems()
  }

}
