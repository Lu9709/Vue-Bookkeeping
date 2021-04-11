<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectTags.indexOf(tag)>=0}"
          @click="Toggle(tag)">
<!--        <Icon name="Label"/>-->
<!--        <Icon :name="getName()"/>-->
        <span class="tagsName">{{ tag.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';
import {createLogger} from 'vuex';

@Component
export default class Tags extends mixins(TagHelper) {
  // IconName: {[key:strig]:string} = {
  //   "餐饮":'food',
  //   "购物":'shop',
  //   "服饰":'cloth',
  //   "医疗":'hospital',
  //   "零食":'lingshi',
  //   "娱乐":'food',
  //   "社交":'social',
  //   "电话":'phone',
  //   "日用":'dailyuse',
  //   "水果":'fruit',
  //   "学习":'study',
  //   "投资":'chuxuguan',
  //   "其他":'else'
  // }
  // getName() {
  //   const x = this.tagList.forEach((x)=>{x.name})
  //
  // }
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