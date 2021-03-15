<template>
  <div>
    <Layout class-prefix="layout">
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

const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
//
// const version = window.localStorage.getItem('version') || '0';
// const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
// if (version === '0.0.1') {
//   //数据升级，迁移
//   recordList.forEach(record => {
//     record.createAt = new Date(0, 1, 4);
//   });
//   // 保存数据
//   window.localStorage.setItem('recordList', JSON.stringify(recordList));
// }
// window.localStorage.setItem('version','0.0.2')


type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createAt?: Date;
}
@Component({
  components: {Tags, Notes, Type, NumberPad},
})

export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: Record = {
    tags: [], notes: "", type: "-", amount: 0
  };
  recordList: Record[] = recordList;

  onTagsUpdate(value: string[]) {
    this.record.tags = value;
  }


  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    const newRecord: Record = JSON.parse(JSON.stringify(this.record));
    newRecord.createAt = new Date();
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
