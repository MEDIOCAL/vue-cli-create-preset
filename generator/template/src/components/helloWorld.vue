<template>
  <div class="imp-hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3 class="imp-hello__subtitle">Installed CLI Plugins</h3>
    <ul class="imp-hello__list">
      <li class="imp-hello__item"><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li class="imp-hello__item"><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li class="imp-hello__item"><a href="https://www.npmjs.com/package/@alife%2Fvue-cli-plugin-stylelint" target="_blank" rel="noopener">stylelint</a></li>
      <li class="imp-hello__item"><a href="git@gitlab.alibaba-inc.com:front_web/vue-cli-create-preset.git" target="_blank" rel="noopener">/Users/xierenhong/work/front_web/vue-cli-create-preset</a></li>
    </ul>
    <h3 class="imp-hello__subtitle">Essential Links</h3>
    <ul>
      <li class="imp-hello__item"><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li class="imp-hello__item"><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li class="imp-hello__item"><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li class="imp-hello__item"><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li class="imp-hello__item"><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3 class="imp-hello__subtitle">Ecosystem</h3>
    <ul>
      <li class="imp-hello__item"><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li class="imp-hello__item"><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li class="imp-hello__item"><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li class="imp-hello__item"><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li class="imp-hello__item"><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
@include b(hello) {
  @include e(subtitle) {
    margin: 40px 0 0;
  }

  @include e(list) {
    list-style-type: none;
    padding: 0;
  }

  @include e(item) {
    display: inline-block;
    margin: 0 10px;

    a {
      color: $primary;
    }
  }
}
</style>
