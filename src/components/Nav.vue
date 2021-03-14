<template>
  <div>
    <router-link to="/Money">
      <Icon name='Money'/>
      Money
    </router-link>
    |
    <router-link to="/Label">
      <Icon name="Label"/>
      Label
    </router-link>
    |
    <router-link to="/Statistic">
      <Icon name="Statistic"/>
      Statistic
    </router-link>
  </div>
</template>

<script lang="ts">

export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>

</style>