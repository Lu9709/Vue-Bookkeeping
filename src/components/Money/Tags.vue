<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
name: "Tags"
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap:wrap;
    > li {
      background-color: #d9d9d9;
      $h: 24px;
      line-height: $h;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top:4px;
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 4px;
    }
  }
}
</style>