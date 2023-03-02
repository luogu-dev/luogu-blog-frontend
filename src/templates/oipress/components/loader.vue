<template>
  <div class="loader-wrapper">
    <div>
      <div class="loader"></div>
    </div>
    加载中……
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.loader-wrapper {
  margin: 1.2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: .6rem;
}
.loader {
  position: relative;
  width: 2em;
  height: 2em;
  display: inline-block;
  border: .1em solid var(--color);
  border-top-color: var(--line-color);
  border-right-color: var(--line-color);
  border-bottom-color: var(--line-color);
  border-radius: 100%;
  animation: loader infinite 0.75s linear;
}
@keyframes loader {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>