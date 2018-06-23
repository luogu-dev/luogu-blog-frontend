<template>
<div class="mdui-valign" style="margin: 30px;">
    <div class="mdui-center">
        <div class="mdui-btn-group" v-if="totalPages > 1">
            <a @click="callback(1)" v-if="page > 1" class="mdui-btn"><i class="mdui-icon material-icons">first_page</i></a>
            <a @click="callback(page - 1)" v-if="page > 1" class="mdui-btn"><i class="mdui-icon material-icons">keyboard_arrow_left</i></a>
            <a @click="callback(page - 2)" v-if="page - 2 >= 1" class="mdui-btn">{{ page - 2 }}</a>
            <a @click="callback(page - 1)" v-if="page - 1 >= 1" class="mdui-btn">{{ page - 1 }}</a>
            <a class="mdui-btn-active mdui-btn">{{ page }}</a>
            <a @click="callback(page + 1)" v-if="page + 1 <= totalPages" class="mdui-btn">{{ page + 1 }}</a>
            <a @click="callback(page + 2)" v-if="page + 2 <= totalPages" class="mdui-btn">{{ page + 2 }}</a>
            <a @click="callback(page + 1)" v-if="page < totalPages" class="mdui-btn"><i class="mdui-icon material-icons">keyboard_arrow_right</i></a>
            <a @click="callback(totalPages)" v-if="page < totalPages"  class="mdui-btn"><i class="mdui-icon material-icons">last_page</i></a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
