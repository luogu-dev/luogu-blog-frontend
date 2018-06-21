<template>
  <div style="text-align: center" v-if="totalPages > 1">
    <button @click="callback(1)" v-if="page != 1" class="bread-button bread-button-normal">&lt;&lt;</button>
    <button @click="callback(page - 1)" v-if="page != 1" class="bread-button bread-button-normal">&lt;</button>
    <button @click="callback(page - 2)" v-if="page - 2 >= 1" class="bread-button bread-button-normal">{{ page - 2 }}</button>
    <button @click="callback(page - 1)" v-if="page - 1 >= 1" class="bread-button bread-button-normal">{{ page - 1 }}</button>
    <button class="bread-button bread-button-primary">{{ page }}</button>
    <button @click="callback(page + 1)" v-if="page + 1 <= totalPages" class="bread-button bread-button-normal">{{ page + 1 }}</button>
    <button @click="callback(page + 2)" v-if="page + 2 <= totalPages" class="bread-button bread-button-normal">{{ page + 2 }}</button>
    <button @click="callback(page + 1)" v-if="page != totalPages" class="bread-button bread-button-normal">&gt;</button>
    <button @click="callback(totalPages)" v-if="page != totalPages" class="bread-button bread-button-normal">&gt;&gt;</button>
  </div>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
