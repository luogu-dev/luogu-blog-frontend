<template>
  <div
    class="mdui-valign"
    style="margin: 30px;"
  >
    <div class="mdui-center">
      <div
        v-if="totalPages > 1"
        class="mdui-btn-group"
      >
        <a
          v-if="page > 1"
          class="mdui-btn"
          @click="callback(1)"
        >
          <i class="mdui-icon material-icons">
            first_page
          </i>
        </a>
        <a
          v-if="page > 1"
          class="mdui-btn"
          @click="callback(page - 1)"
        >
          <i class="mdui-icon material-icons">
            keyboard_arrow_left
          </i>
        </a>
        <a
          v-if="page - 2 >= 1"
          class="mdui-btn"
          @click="callback(page - 2)"
        >
          {{ page - 2 }}
        </a>
        <a
          v-if="page - 1 >= 1"
          class="mdui-btn"
          @click="callback(page - 1)"
        >
          {{ page - 1 }}
        </a>
        <a class="mdui-btn-active mdui-btn">
          {{ page }}
        </a>
        <a
          v-if="page + 1 <= totalPages"
          class="mdui-btn"
          @click="callback(page + 1)"
        >
          {{ page + 1 }}
        </a>
        <a
          v-if="page + 2 <= totalPages"
          class="mdui-btn"
          @click="callback(page + 2)"
        >
          {{ page + 2 }}
        </a>
        <a
          v-if="page < totalPages"
          class="mdui-btn"
          @click="callback(page + 1)"
        >
          <i class="mdui-icon material-icons">
            keyboard_arrow_right
          </i>
        </a>
        <a
          v-if="page < totalPages"
          class="mdui-btn"
          @click="callback(totalPages)"
        >
          <i class="mdui-icon material-icons">
            last_page
          </i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
