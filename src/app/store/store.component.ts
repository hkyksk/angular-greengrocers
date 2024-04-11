import { Component, OnInit } from '@angular/core'
import { GroceryService } from '../grocery.service'
import { Item } from '../models/item'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  groceryList: Item[] = []

  constructor(private groceryService: GroceryService, private cartService: CartService) {}

  ngOnInit(): void {
    this.groceryService.fetchGroceries()
      .then((data: Item[]) => {
        this.groceryList = data
      })
      .catch((error) => {
        console.error('Error fetching groceries:', error)
      })
  }

  addToCart(item: Item): void {
    this.cartService.addItemToCart(item) 
  }
}
