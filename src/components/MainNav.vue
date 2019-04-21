<template>
  <b-navbar toggleable="lg" type="dark" variant="transparent" fixed="top">
    <div class="container">
      <b-navbar-brand href="#">JSON Stack</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-on:click="$store.commit('stackToggleView')">{{ $store.state.stackOpen ? 'Shrink' : 'Expand'}} Stack</b-nav-item>
        </b-navbar-nav>
        <div class="ml-auto">
          <b-form-file
            placeholder="Upload JSON"
            drop-placeholder="Drop JSON here"
            accept=".json"
            @change="fileChange"
          ></b-form-file>
        </div>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "main-nav",
  data() {
    return {
      file: '',
    }
  },
  methods: {
    fileChange: function (e) {
      let reader = new FileReader()
      reader.onload = this.onReaderLoad
      reader.readAsText(e.target.files[0])
      this.file = e.target.files[0]
    },
    onReaderLoad: function (e) {
        this.$store.commit('loadStackData', e.target.result)
    },
    ...mapMutations([
      'stackData'
    ])
  }
}
</script>

<style>

</style>
