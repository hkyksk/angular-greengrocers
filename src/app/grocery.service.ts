import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { Item } from './models/item'

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private groceryList: Item[] = []

  constructor(private http: HttpClient) { }

  async fetchGroceries() {
    this.groceryList = await firstValueFrom(this.http.get<Item[]>('https://boolean-api-server.fly.dev/groceries'))
    console.log('Groceries:', this.groceryList)
    return this.groceryList
  }
}
