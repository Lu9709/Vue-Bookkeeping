<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectTags.indexOf(tag)>=0}"
          @click="Toggle(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';

@Component
export default class Tags extends mixins(TagHelper) {
  selectTags: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }

  Toggle(tag: string) {
    const index = this.selectTags.indexOf(tag);
    if (index >= 0) {
      this.selectTags.splice(index, 1);
    } else {
      this.selectTags.push(tag);
    }
    this.$emit('update:value', this.selectTags);
  }

}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  display: flex;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg: #d9d9d9;
      background-color: $bg;
      $h: 24px;
      line-height: $h;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
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