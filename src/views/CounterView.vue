<script lang="ts" setup>
import {useCounterStore} from '../stores/counter';

const counterStore = useCounterStore();
</script>

<template>
    <h1>
    Counter View: {{counterStore.counter}}
    </h1>
    <h3>Number of changes: {{counterStore.numberOfChanges}}</h3>
</template>