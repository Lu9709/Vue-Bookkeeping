<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad/>
      <Type/>
      <Notes/>
      <Tags :data-source="tags"/>
<!--      <Tags :data-source="tags" v-on:update:dataSource="tags=$event" />-->
    </Layout>
  </div>
</template>

<script>
import NumberPad from '@/components/Money/NumberPad.vue';
import Type from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

export default {
  name: "Money",
  components: {Tags, Notes, Type, NumberPad},
  data() {
    return {
      tags: ['衣', '食', '住', '行']
    }
  }
};
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
