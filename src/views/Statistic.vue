<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <div>
        type: {{ type }}
        <br/>
        interval: {{ interval }}
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tabs from '@/components/Tabs.vue';
import Types from '@/components/Money/Types.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Tabs, Types}
})
export default class Statistic extends Vue {
  type = '-';
  interval = 'day';
  typeList = [
    {text: "支出", value: "-"},
    {text: "收入", value: "+"}
  ];
  intervalList = [
    {text: "按天", value: "day"},
    {text: "按周", value: "week"},
    {text: "按月", value: "month"},
  ];
}
</script>
<style scoped lang="scss">
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #C4C4C4;

    &::after {
      display: none;
    }
  }
}
</style>
