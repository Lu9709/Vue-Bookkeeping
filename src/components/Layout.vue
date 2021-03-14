<template>
  <div class="nav-wrapper">
    <div class="content">
     <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout"
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 100vh;
}

.content {
  overflow: auto;
  border: 1px solid black;
  flex-grow: 1;
}

</style>