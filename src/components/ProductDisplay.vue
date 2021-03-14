<template>
    <div class="product-container" @click="addToCart">
        <div class="product-image">
            <img :src="product.image" :alt="product.name">
        </div>
        <div class="product-info">
            <p class="product-name">{{ product.name }}</p>
            <p class="product-price">€ {{ product.price }}</p>
        </div>
        <div class="button">Add to Cart</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Product } from '../interfaces/Product'

@Component
export default class ProductDisplay extends Vue {
    @Prop() readonly product!: Product

    @Emit('add-to-cart')
    addToCart() {
        return this.product
    }
}

</script>