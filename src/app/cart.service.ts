import { Injectable } from '@angular/core'
import { Item } from './models/item'
import { BehaviorSubject, Subscription } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Item[] = []
  private cartItemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([])
  private cartSubscription!: Subscription


  constructor() {}

  cartItemsChanged = this.cartItemsSubject.asObservable()
  
  private notifyCartItemsChanged(): void {
    this.cartItemsSubject.next(this.cartItems)
  }

  addItemToCart(item: Item): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      const newItem = { ...item, quantity: 1 }
      this.cartItems.push(newItem)
    }
    this.notifyCartItemsChanged()
  }

  increaseItemQuantity(item: Item): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      existingItem.quantity++
      this.notifyCartItemsChanged()
    }
  }

  decreaseItemQuantity(item: Item): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id)
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id)
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--
    } else if (index !== -1) {
      this.cartItems.splice(index, 1)
    }
    this.notifyCartItemsChanged()
  }

  getCartItems(): Item[] {
    return this.cartItems
  }

  getItemQuantity(item: Item): number {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id)
    return existingItem ? existingItem.quantity : 0
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

}
