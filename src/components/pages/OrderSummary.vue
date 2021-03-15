<template>
    <div class="app-container">
        <div class="order-container">
            <div class="order-summary">
                <h1>Order #{{ order.id }}</h1>
                <div class="section">
                    <h2>Name</h2>
                    <p>{{ order.firstName }} {{ order.lastName }}</p>
                </div>
                <div class="section">
                    <h2>Order</h2>
                    <p
                    v-for="item in order.orderedItems" :key="item.id">
                        {{ item.quantity }}x {{ item.name }}
                    </p>
                </div>
                <div class="section">
                    <h2>Delivery</h2>
                    <p class="date">{{ dateString }}</p>
                </div>
            </div>
        </div>
        <div 
        class="newOrder"
        @click="newOrder"
        >
            New order
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Order } from '../../interfaces/Order'

@Component
export default class Checkout extends Vue {
    @Prop() order!: Order[]

    @Emit('new-order')
    newOrder () {
        // console.log('new order')
    }

    get dateString() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return this.order.deliveryDate.toLocaleDateString("en-UK", options)
    }
}
</script>