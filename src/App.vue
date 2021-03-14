<template>
  <div id="app">
    <Products :cart="cart" @add-to-cart="updateCart"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Products from './components/Products.vue';
import { CartItem } from './interfaces/CartItem'
import { Product } from './interfaces/Product'

@Component({
  components: {
    Products
  },
})
export default class App extends Vue {
  cart: CartItem[] = []

  updateCart(product: Product) {
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
}
</script>
