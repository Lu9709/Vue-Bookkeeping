<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Type :value.sync="record.type"/>
      <div class="notes">
        <FormItem field-name="备注" placeholder="在这里输入备注"
                  @update:value="onUpdateNotes"/>
      </div>
      <Tags/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Type from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Tags, FormItem, Type, NumberPad},
})

export default class Money extends Vue {
  record: RecordItem = {
    tags: [], notes: "", type: "-", amount: 0
  };
  get recordList() {
    return this.$store.state.recordList;
  }
  created(){
    this.$store.commit('fetchRecords')
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
