<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="grid m-2 p-2">
    <div class="place-self-center">
      <RouterView />
    </div>
  </div>
</template>

<!-- 
<script setup>
import TeamView from "@/views/TeamView.vue"
</script>

<template>
  <div class="grid m-2 p-2">
    <div class="place-self-center">
      <TeamView />
    </div>
  </div>
</template> -->
