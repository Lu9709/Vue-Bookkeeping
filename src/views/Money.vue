<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Type :value.sync="record.type"/>
      <div class="notes">
        <FormItem field-name="备注" placeholder="在这里输入备注"
                  @update:value="onUpdateNotes"/>
      </div>
      <Tags :data-source.sync="tags" @update:value="onTagsUpdate"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Type from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import  recordListModel from '@/models/recordListModel'
import tagsListModel from '@/models/tagsListModel';



const recordList = recordListModel.fetch()
const tagsList = tagsListModel.fetch()

@Component({
  components: {Tags, FormItem, Type, NumberPad},
})

export default class Money extends Vue {
  tags = tagsList
  record: RecordItem = {
    tags: [], notes: "", type: "-", amount: 0
  };
  recordList: RecordItem[] = recordList;

  onTagsUpdate(value: string[]) {
    this.record.tags = value;
  }


  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    const newRecord: RecordItem = recordListModel.clone(this.record)
    newRecord.createAt = new Date();
    this.recordList.push(newRecord);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>
