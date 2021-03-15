<template>
  <nav>
    <router-link class="item" to="/Money" active-class="selected">
      <Icon name='Money'/>
      Money
    </router-link>

    <router-link class="item" to="/Label" active-class="selected">
      <Icon name="Label"/>
      Label
    </router-link>

    <router-link class="item" to="/Statistic" active-class="selected">
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
@import "~@/assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;
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
  > .item.selected{
    color: red;
  }
}
</style>