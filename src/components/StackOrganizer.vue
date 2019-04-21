<template>
  <div class="stack-organizer container">
    <stack-collection
      :stackData="stackData"
      v-bind:class="{ open: $store.state.stackOpen }"
    />
  </div>
</template>

<script>
import { Draggable } from '@shopify/draggable'
import StackCollection from './stacks/StackCollection'

export default {
  name: 'stack-organizer',
  components: {
    StackCollection,
  },
  props: {
    'stackData': Array,
    'stackOpen': Boolean,
  },
  methods: {
  },
  mounted() {
    const draggable = new Draggable(document.querySelectorAll('.stack-collection'), {
      draggable: '.stack-card',
      delay: 200
    })
  }
}
</script>

<style lang="scss">
  .stack-organizer {

  }
</style>
