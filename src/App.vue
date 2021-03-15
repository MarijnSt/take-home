<template>
  <div id="app">
    <Products 
    v-if="page === 'products'" 
    :cart="cart" 
    @add-to-cart="addToCart"
    @view-cart="nextStep('cart')"/>

    <Cart
    v-if="page === 'cart'"
    :cart="cart"
    @to-checkout="toCheckout"
    />

    <Checkout
    v-if="page === 'checkout'"
    :cart="cart"
    @place-order="placeOrder"/>

    <Confirm
    v-if="page === 'confirm'"
    :orderNumber="order[0].id"
    @view-order="viewOrder"
    @new-order="newOrder"/>

    <OrderSummary
    v-if="page === 'orderSummary'"
    :order="order[0]"
    @new-order="newOrder"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Products from './components/pages/Products.vue';
import Cart from './components/pages/Cart.vue';
import Checkout from './components/pages/Checkout.vue';
import Confirm from './components/pages/Confirm.vue';
import OrderSummary from './components/pages/OrderSummary.vue';
import { CartItem } from './interfaces/CartItem'
import { Product } from './interfaces/Product'
import { Order } from './interfaces/Order';

@Component({
  components: {
    Products,
    Cart,
    Checkout,
    Confirm,
    OrderSummary
  },
})
export default class App extends Vue {
  // data
  cart: CartItem[] = []
  order: Order[] = []
  page = 'products'

  // methods
  addToCart(product: Product) {
    // check of product al in cart zit --> quantity verhogen
    const checkedArray = this.cart.filter(item => item.id === product.id)
    if (checkedArray.length) {
      const i = this.cart.indexOf(checkedArray[0])
      this.cart[i].quantity += 1
    } else {
      const cartItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      }
      this.cart.push(cartItem)
    }
  }

  toCheckout(newCart: CartItem[]) {
    this.cart = newCart
    this.nextStep('checkout')
  }

  placeOrder(order: Order) {
    this.order.push(order)
    this.nextStep('confirm')
  }

  viewOrder(){
    this.nextStep('orderSummary')
  }

  newOrder(){
    this.nextStep('newOrder')
  }

  nextStep(step: string) {
    switch (step) {
      case 'cart':
        if (this.cart.length > 0) this.page = 'cart'
        break;
      case 'checkout':
        this.page = 'checkout'
        break;
      case 'confirm':
        this.page = 'confirm'
        break;
      case 'orderSummary':
        this.page = 'orderSummary'
        break;
      case 'newOrder':
        this.page = 'products'
        this.cart = []
        this.order = []
        break;
    }
  }
}
</script>
