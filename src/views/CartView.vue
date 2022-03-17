<script lang="ts" setup>
import {useCartStore} from '../stores/cart';
import Card from '../components/Card.vue';
import AddItem from '../components/AddItem.vue';
import ItemsList from '../components/ItemsList.vue';

const cart = useCartStore();

</script>


<template>
    <div class="container">
    <Card>
        <h4>Add new item</h4>
        <AddItem/>
    </Card>
    <Card>
        <h4>Your items: ({{cart.itemsCount}})</h4>
        <ItemsList/>
    </Card>
    </div>
</template>