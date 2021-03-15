<template>
    <div class="app-container">
        <div class="order-container">
            <h1>Order #{{ order.id }}</h1>
            <p>Name: {{ order.firstName }} {{ order.lastName }}</p>
            <p>Order: {{ order.orderedItems[0].quantity }}x {{ order.orderedItems[0].name }}</p>
            <p>Delivery: {{ order.deliveryDate }}</p>
        </div>
        
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Order } from '../../interfaces/Order'

@Component
export default class Checkout extends Vue {
    @Prop() order!: Order[]
}
</script>