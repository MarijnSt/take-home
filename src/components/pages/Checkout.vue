<template>
    <div class="app-container">
        <h1>Checkout</h1>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { CartItem } from '../../interfaces/CartItem'

@Component
export default class Checkout extends Vue {
    // props
    @Prop() cart!: CartItem[]

    // data

    // methods
    mounted(){
        console.log(this.cart)
    }
}
</script>