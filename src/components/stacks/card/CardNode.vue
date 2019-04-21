<template>
  <li :class="[ subNode ? 'sub-card-node' : 'card-node', 'py-2 border-bottom' ]">
    <div class="node-key font-weight-bold">{{ label }}</div>
    <div class="node-value">
      <span :class="'' + typeof value" v-if="typeof value !== 'object'">{{ value }}</span>
      <div class="node-children" v-if="typeof value === 'object'">
        <card-node
          v-for="(childValue, childLabel) in value"
          :key="childValue.id"
          :label="childLabel"
          :value="childValue"
          :subNode="subNode"
        />
      </div>
    </div>
  </li>
</template>

<script>
import CardNode from './CardNode'

export default {
  name: 'card-node',
  components: {
    CardNode
  },
  props: ['label', 'value', 'subNode']
}
</script>

<style>

</style>
