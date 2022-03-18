<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
  
const props = defineProps({
    to: { type: String, required: true },
    exact: { type: Boolean, default: false }
});

const route = useRoute();
const active = computed(() =>
    props.exact ? route.path === props.to : route.path.startsWith(props.to)
);

</script>

<template>
  <div style="width: 150px">
    <router-link
      :to="to"
      class="nav-link"
      :class="active ? 'font-weight-bold' : null"
    >
      <slot />
    </router-link>
  </div>
</template>