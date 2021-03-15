<template>
    <div class="details-input">
        <label :for="forValue">{{ label }}</label>
        <div class="input-container">
            <input
            type="text"
            :id="forValue" 
            @input="onInputChange"
            v-model="inputValue" 
            :placeholder="placeholder">
            
            <div class="close-icon" @click="resetProducts">
                <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
                    <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class DetailsInput extends Vue {
    // props
    @Prop() forValue!: string
    @Prop() label!: string
    @Prop() placeholder!: string

    // data
    inputValue = ''

    // methods
    @Emit('input-change')
    onInputChange() {
        return this.inputValue
    }

    resetProducts() {
      this.inputValue = ''
    }
}
</script>