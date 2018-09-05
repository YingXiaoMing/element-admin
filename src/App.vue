<template>
  <div id="app">
      <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
  margin: 0;
  padding: 0;
}
*,:after, :before {
    -webkit-box-sizing: border-box;
    
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
