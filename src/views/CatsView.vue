<script lang="ts" setup>
import Header from '../components/Header.vue';
</script>

<template>
    <Header />
    <div class="card">
        <div class="card-body text-center">
            <h4>Welcome to the cat facts page</h4>
            <div>&#128571;</div>
            <span>
                Use the nav menu above to find new facts!
            </span>
        </div>
    </div>
    <div class="container my-3">
        <router-view />
    </div>
</template>