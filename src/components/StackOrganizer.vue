<template>
  <div class="stack-organizer container">
    <stack-collection
      :stackData="stackData"
      @click.native="openStack"
      :class="{ open: $store.state.stackOpen }"
    />
  </div>
</template>

<script>
import { Sortable } from '@shopify/draggable'
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
    openStack: function () {
      if(!this.$store.state.stackOpen)
        this.$store.commit('stackToggleView')
    }
  },
  mounted() {
    // eslint-disable-next-line
    const sortable = new Sortable(document.querySelectorAll('.stack-collection'), {
      draggable: '.stack-card',
      delay: 200,
      mirror: {
        constrainDimensions: true,
      }
    })
  }
}
</script>

<style lang="scss">
.stack-organizer {

}
</style>
