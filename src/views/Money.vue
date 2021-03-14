<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>money</p>
    </div>
    <Nav/>
  </div>

</template>

<script lang="ts">
export default {
  name: "Money"
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  flex-grow: 1;
}

.content {
  overflow: auto;
  border: 1px solid black;
  height: 100vh;
}

</style>