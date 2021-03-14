<template>
  <div class="app-container">
    <h1>Products</h1>
    <FormInput @input-change="handleInput" @reset-products="resetProducts"/>
    <!-- productdisplay -->
    <div class="product-list">
      <ProductDisplay 
      v-for="product in listedProducts" :key="product.id" 
      :product="product"
      @add-to-cart="addToCart"/>
    </div>
    <!-- viewcart -->
    <div class="toCart">
      View Cart
      <span class="number">{{ numberOfCartItems }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Product } from '../interfaces/Product' 
import { CartItem } from '../interfaces/CartItem'
import FormInput from './FormInput.vue'
import ProductDisplay from './ProductDisplay.vue'

@Component({
  components: {
    FormInput,
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

