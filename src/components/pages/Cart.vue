<template>
    <div class="app-container">
        <h1>Cart</h1>
        <div class="cart-list">
            <CartProduct
            v-for="cartProduct in newCart" :key="cartProduct.id"
            :cartProduct="cartProduct"
            @decrease-quantity="decreaseQuantity"
            @increase-quantity="increaseQuantity"
            @delete-product="deleteProduct"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { CartItem } from '../../interfaces/CartItem'
import CartProduct from '../CartProduct.vue'

@Component({
    components: {
        CartProduct
    }
})
export default class Cart extends Vue {
    // props
    @Prop() cart!: CartItem[]

    // data
    newCart: CartItem[] = this.cart

    // methods
    decreaseQuantity(id: number) {
        const productInCart = this.cart.filter(item => item.id === id)
        const i = this.newCart.indexOf(productInCart[0])
        if (productInCart[0].quantity > 1) {
            this.newCart[i].quantity -= 1
        } else {
            this.newCart.splice(i, 1)
        }
    }
    increaseQuantity(id: number) {
        const productInCart = this.cart.filter(item => item.id === id)
        const i = this.newCart.indexOf(productInCart[0])
        this.newCart[i].quantity += 1
    }
    deleteProduct(id: number) {
        const productInCart = this.cart.filter(item => item.id === id)
        const i = this.newCart.indexOf(productInCart[0])
        this.newCart.splice(i, 1)
    }

    // @Emit('update-cart')
    // updateCart(newCart: CartItem[]) {
    //     return newCart
    // }
}
</script>