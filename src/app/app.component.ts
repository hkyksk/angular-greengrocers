import { Component } from '@angular/core'
import { GroceryService } from './grocery.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-green-grocers'

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void{
    this.groceryService.fetchGroceries()
  }
}
