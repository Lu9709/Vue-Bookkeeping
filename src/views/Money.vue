<template>
  <div>
    <Layout class-prefix="layout">
      {{ record }}
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Type :value.sync="record.type"/>
      <Notes @update:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:value="onTagsUpdate"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Type from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}
@Component({
  components: {Tags, Notes, Type, NumberPad},
})

export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: Record = {
    tags: [], notes: "", type: "-", amount: 0
  };
  recordList: Record[] = [];


  onTagsUpdate(value: string[]) {
    this.record.tags = value;
  }


  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    const newRecord = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(newRecord);
  }

  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
