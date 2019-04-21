<template>
  <div :class="[ 'card shadow stack-card p-3', {open: open} ]" @click="openCard">
    <ul class="card-nodes list-unstyled">
      {{ nodeId }}
      <card-node
        v-for="(value, label) in cardData"
        :key="value.id"
        v-bind="{value, label}"
      />
    </ul>
    <div class="card-tools">
      <b-button-group>
        <b-button variant="danger" @click="deleteCard">Delete</b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import CardNode from './card/CardNode'

export default {
  name: 'stack-card',
  components: {
    CardNode
  },
  props: {
    cardData: Object,
    nodeId: Object
  },
  data() {
    return {
      open: false
    }
  },
  compute: {
    stackOpen () {
      return this.$store.state.stackOpen
    }
  },
  methods: {
    openCard: function () {
      if(this.$store.state.stackOpen)
        this.open = !this.open
    },
    deleteCard: function () {
      this.$store.commit('deleteStackCard', this.nodeId)
    }
  },
  mounted() {
    // eslint-disable-next-line
  }
}
</script>

<style lang="scss">
.stack-card {
  overflow: hidden;
  border-radius: 1rem !important;
  width: 100%;

  .card-node {
    .node-key {
      min-width: 120px;
    }
  }

  .card-node,
  .sub-card-node {
    display: flex;
    font-size: 0.9rem;

    .node-value {
      width: 100%;
    }
    &:nth-child(1) {
      padding-top: 0 !important;
    }
    &:nth-last-child(1) {
      padding-bottom: 0 !important;
      border-bottom: 0 !important;
    }
  }

  .node-children {
    .node-key {
      min-width: 50px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(255,255,255,100%) 98%);
    pointer-events: none;
  }

  .card-tools {
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
  }


  &:hover {
    .card-tools {
      opacity: 1;
      pointer-events: initial;
    }
  }

  &.open {
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    z-index: 50;
    overflow: visible;

    &::after {
      opacity: 0;
    }
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
    z-index: 0;

    $limit: 10;

    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        top: #{$i * 1}rem;
        z-index: #{$limit - $i}
      }
    }

    @media screen and (min-width: 720px) {
      width: 640px;
      height: 640px;
    }

    .card-tools {
      display: none;
    }
  }
}
</style>
