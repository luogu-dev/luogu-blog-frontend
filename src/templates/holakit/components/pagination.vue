<template>
  <div
    v-if="totalPages > 1"
    style="text-align: center"
  >
    <button
      v-if="page != 1"
      class="hola-button hola-button-normal"
      @click="callback(1)"
    >
      &lt;&lt;
    </button>
    <button
      v-if="page != 1"
      class="hola-button hola-button-normal"
      @click="callback(page - 1)"
    >
      &lt;
    </button>
    <button
      v-if="page - 2 >= 1"
      class="hola-button hola-button-normal"
      @click="callback(page - 2)"
    >
      {{ page - 2 }}
    </button>
    <button
      v-if="page - 1 >= 1"
      class="hola-button hola-button-normal"
      @click="callback(page - 1)"
    >
      {{ page - 1 }}
    </button>
    <button class="hola-button hola-button-primary">
      {{ page }}
    </button>
    <button
      v-if="page + 1 <= totalPages"
      class="hola-button hola-button-normal"
      @click="callback(page + 1)"
    >
      {{ page + 1 }}
    </button>
    <button
      v-if="page + 2 <= totalPages"
      class="hola-button hola-button-normal"
      @click="callback(page + 2)"
    >
      {{ page + 2 }}
    </button>
    <button
      v-if="page != totalPages"
      class="hola-button hola-button-normal"
      @click="callback(page + 1)"
    >
      &gt;
    </button>
    <button
      v-if="page != totalPages"
      class="hola-button hola-button-normal"
      @click="callback(totalPages)"
    >
      &gt;&gt;
    </button>
  </div>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
