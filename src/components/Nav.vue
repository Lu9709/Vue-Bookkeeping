<template>
  <nav>
    <router-link class="item" to="/Money">
      <Icon name='Money'/>
      Money
    </router-link>

    <router-link class="item" to="/Label">
      <Icon name="Label"/>
      Label
    </router-link>

    <router-link class="item" to="/Statistic">
      <Icon name="Statistic"/>
      Statistic
    </router-link>
  </nav>
</template>

<script lang="ts">

export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  flex-direction: row;
  font-size: 12px;

  > .item {
    padding: 2px 0;
    width: 33.333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>