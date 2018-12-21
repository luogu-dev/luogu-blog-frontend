<template>
  <div
    class="ui three column centered grid"
    style="margin: 30px;"
  >
    <div
      v-if="totalPages > 1"
      class="ui pagination menu"
    >
      <a
        :class="{ disabled: page == 1 }"
        class="item"
        @click="callback(1)"
      >
        <i class="chevron circle left icon" />
      </a>
      <a
        :class="{ disabled: page == 1 }"
        class="item"
        @click="callback(page - 1)"
      >
        <i class="chevron left icon" />
      </a>
      <a
        v-if="page - 2 >= 1"
        class="item"
        @click="callback(page - 2)"
      >
        {{ page - 2 }}
      </a>
      <a
        v-if="page - 1 >= 1"
        class="item"
        @click="callback(page - 1)"
      >
        {{ page - 1 }}
      </a>
      <a class="active item">
        {{ page }}
      </a>
      <a
        v-if="page + 1 <= totalPages"
        class="item"
        @click="callback(page + 1)"
      >
        {{ page + 1 }}
      </a>
      <a
        v-if="page + 2 <= totalPages"
        class="item"
        @click="callback(page + 2)"
      >
        {{ page + 2 }}
      </a>
      <a
        :class="{ disabled: page == totalPages }"
        class="item"
        @click="callback(page + 1)"
      >
        <i class="chevron right icon" />
      </a>
      <a
        :class="{ disabled: page == totalPages }"
        class="item"
        @click="callback(totalPages)"
      >
        <i class="chevron circle right icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
