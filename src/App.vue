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
    @update-cart="updateCart"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Products from './components/pages/Products.vue';
import Cart from './components/pages/Cart.vue';
import { CartItem } from './interfaces/CartItem'
import { Product } from './interfaces/Product'

@Component({
  components: {
    Products,
    Cart
  },
})
export default class App extends Vue {
  // data
  cart: CartItem[] = []
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

  updateCart(newCart: CartItem[]) {
    console.log('app', newCart)
  }

  nextStep(step: string) {
    switch (step) {
      case 'cart':
        if (this.cart.length > 0) this.page = 'cart'
        break;
    }
  }
}
</script>
