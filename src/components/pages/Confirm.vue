<template>
    <div class="app-container">
        <div class="confirm-container">
            <h1 class="title">Order #{{ orderNumber }}</h1>
            <p class="subtitle">has been placed</p>
            <p class="toOrder" @click="viewOrder">View Order</p>
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

@Component
export default class Checkout extends Vue {
    @Prop() orderNumber!: number

    @Emit('view-order')
    viewOrder () {
        // console.log('view order')
    }
    
    @Emit('new-order')
    newOrder () {
        // console.log('new order')
    }
}
</script>