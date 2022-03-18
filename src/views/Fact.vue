<script lang="ts" setup>
import {computed, ComputedRef} from 'vue';
import {useRoute} from 'vue-router';
import FactCard from '../components/FactCard.vue';

const router = useRoute();
const factId = computed(() => router.params.id) as ComputedRef<string>;
</script>

<template>
    <FactCard :fact-id="parseInt(factId)"/>
</template>