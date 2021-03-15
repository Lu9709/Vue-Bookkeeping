<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad/>
      <Type/>
     <Notes/>
      <Tags/>
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Type from '@/components/Money/Type.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

export default {
  name: "Money",
  components: {Tags, Notes, Type, NumberPad}
};
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
