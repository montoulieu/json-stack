<template>
  <div class="card stack-card p-3">
    <ul class="card-nodes list-unstyled">
      <li class="card-node py-2 border-bottom" v-for="(value, key) in cardData" :key="value.id">
        <div class="node-key font-weight-normal">{{ key }}</div>
        <div class="node-value">{{ value }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'stack-card',
  props: {
    cardData: Object
  }
}
</script>

<style lang="scss">
.stack-card {
  overflow: hidden;

  .card-node {
    display: flex;
    font-size: 0.9rem;

    .node-key {
      min-width: 100px;
    }
    &:nth-child(1) {
      padding-top: 0 !important;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background: linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(255,255,255,100%) 100%);
  }
}

.stack-collection:not(.open) {
  .stack-card {
    width: 320px;
    height: 320px;
    position: absolute !important;
    left: 0;
    right: 0;
    margin: auto;

    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        top: #{$i * 3}px;
        z-index: -#{'10' + $i}
      }
    }

    @media screen and (min-width: 720px) {
      width: 640px;
      height: 640px;
    }
  }
}
</style>
