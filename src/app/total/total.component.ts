import { Component, OnInit, OnDestroy } from '@angular/core'
import { CartService } from '../cart.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit, OnDestroy {
  totalPrice: number = 0;
  private cartSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.cartSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.updateTotalPrice()
    this.cartSubscription = this.cartService.cartItemsChanged.subscribe(() => {
      this.updateTotalPrice()
    })
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe()
  }

  private updateTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice()
  }
}
