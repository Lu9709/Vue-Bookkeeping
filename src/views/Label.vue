<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="tag" :to="`/Label/edit/${tag.id}`"
                     v-for="tag in tags" :key="tag.id"><span>{{ tag.name }}</span>
          <Icon name="right"/>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag"
                @click="createTag">
          新建标签
        </Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsListModel from '@/models/tagsListModel';
import Button from '@/components/Button.vue';

tagsListModel.fetch();
@Component({
  components: {Button}
})

export default class Label extends Vue {
    tags =window.tagList

  createTag() {
    const tagName = window.prompt('请输入标签');
    if (tagName) {
      const message = tagsListModel.create(tagName);
      if (message === 'duplicated') {
        alert('标签名重复了');
      } else if (message === "success") {
        window.alert('添加成功');
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

</style>