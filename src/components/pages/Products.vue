<template>
  <div class="app-container">
    <h1>Products</h1>
    <SearchBar @input-change="handleInput" @reset-products="resetProducts"/>

    <div class="product-list">
      <ProductDisplay 
      v-for="product in listedProducts" :key="product.id" 
      :product="product"
      @add-to-cart="addToCart"/>
    </div>

    <div 
    class="toCart"
    :class="{ disableButton: cart.length === 0}"
    @click="viewCart">
      View Cart
      <span class="number">{{ numberOfCartItems }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Product } from '../../interfaces/Product' 
import { CartItem } from '../../interfaces/CartItem'
import SearchBar from '../SearchBar.vue'
import ProductDisplay from '../ProductDisplay.vue'

@Component({
  components: {
    SearchBar,
    ProductDisplay
  }
})
export default class Products extends Vue {
  // props
  @Prop() readonly cart!: CartItem[]

  // data
  products: Product[] = [
    { id: 1, name: 'Coca Cola', price: 2.00, image: './assets/cola.png'},
    { id: 2, name: 'Fanta', price: 2.00, image: './assets/fanta.png'},
    { id: 3, name: 'Finley Ginger Ale', price: 2.00, image: './assets/finley.png'}
  ]
  listedProducts: Product[] = this.products

  // methods
  handleInput(inputText: string) {
    const newProducts = this.products.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()))
    this.listedProducts = newProducts
  }

  resetProducts() {
    this.listedProducts = this.products
  }

  @Emit('add-to-cart')
  addToCart(product: Product) {
      return product
  }

  @Emit('view-cart')
  viewCart() {
    // console.log('view cart')
  }

  // computed values
  get numberOfCartItems () {
    let total = 0
    this.cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

}
</script>

