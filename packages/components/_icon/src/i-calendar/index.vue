<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconCalendar'
})
</script>

<template>
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path
      d="M320 64a32 32 0 0 1 32 32v64h320V96a32 32 0 0 1 64 0v64h64c53 0 96 43 96 96v576c0 53-43 96-96 96H224c-53 0-96-43-96-96V256c0-53 43-96 96-96h64V96a32 32 0 0 1 32-32zm-96 160a32 32 0 0 0-32 32v96h640v-96a32 32 0 0 0-32-32H224zm608 192H192v416a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V416z"
    />
    <path d="M288 512h128v96H288v-96zm0 160h128v96H288v-96zm192-160h128v96H480v-96zm0 160h128v96H480v-96zm192-160h128v96H672v-96z" />
  </svg>
</template>
