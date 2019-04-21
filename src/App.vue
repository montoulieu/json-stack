<template>
  <div id="app">
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

<style>
body {
  font-weight: 300 !important;
}

.container {
  min-width: 1400px;
}
</style>
