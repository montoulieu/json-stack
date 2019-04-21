<template>
  <div class="stack-collection">
    <stack-card
      v-if="cardData"
      v-for="cardData in stackData"
      :key="cardData.id"
      :nodeId="cardData.id"
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
  // height: 70vh;
  margin: auto;
  outline: 0;
  user-select: none;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 500px;
  grid-gap: 2rem;
  justify-items: center;

  @media screen and (min-width: 720px) {
    &:not(.open){
      width: 640px;
      height: 752px;
    }
  }

  &.open {
    display: grid;
  }
}
</style>
