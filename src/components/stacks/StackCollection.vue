<template>
  <div class="stack-collection">
    <stack-card
      v-for="cardData in stackData"
      :key="cardData.id"
      :cardData="cardData"
    />
  </div>
</template>

<script>
import StackCard from './StackCard'
export default {
  name: 'stack-collection',
  components: {
    StackCard
  },
  props: {
    'stackData': Array,
  }
}
</script>

<style lang="scss">
.stack-collection {
  position: relative;
  height: 70vh;
  margin: auto;
  outline: 0;

  @media screen and (min-width: 720px) {
  }

  &.open {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 500px;
    grid-gap: 1rem;
  }
}
</style>
