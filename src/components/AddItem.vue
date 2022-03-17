<script lang="ts" setup>
import { reactive } from 'vue';
import {useCartStore} from '../stores/cart';

const inputs = reactive({name: '', url: ''});
const cart = useCartStore();

const submit = () => {
    cart.addItem({...inputs});
    inputs.name = '';
    inputs.url = '';
}
</script>

<template>
    <form class="form" @submit.prevent="submit">
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input v-model="inputs.name" type="text" class="form-control"/>
        </div>
        <div class="mb-3">
            <label class="form-label">URL</label>
            <input v-model="inputs.url" type="text" class="form-control"/>
        </div>
        <button type="submit" class="btn btn-success">
            Add
        </button>
    </form>
</template>

