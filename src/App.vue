<template>
  <div id="app" :class="{ 'stack-open': stackOpen }">
    <main-nav/>
    <stack-organizer
      class="py-3"
      :stackData="stackData"
      :stackOpen="stackOpen"
    />
  </div>
</template>

<script>
import MainNav from './components/MainNav'
import StackOrganizer from './components/StackOrganizer'
import sampleData from './json/dummy-data'

export default {
  name: 'app',
  components: {
    MainNav,
    StackOrganizer
  },
  computed: {
    stackData () {
      return this.$store.state.stackData
    },
    stackOpen () {
      return this.$store.state.stackOpen
    }
  },
  methods: {
    // loadData: function (data) {
    //   this.loadedStack = data
    // },
  },
  mounted() {
    this.$store.commit('loadStackData', sampleData)
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400,500,700');

body {
  font-weight: 300 !important;
  font-family: 'IBM Plex Mono', sans-serif !important;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  width: 100%;

  &.stack-open {
    margin-top: 56px;
  }
}

.container {
  max-width: 1400px !important;
}
</style>
