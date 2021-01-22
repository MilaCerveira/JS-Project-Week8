<template lang="html">
  <div>
<p> This is where the list will display </p>
<list-item
v-for="(item, index) in bodies"
:item="item"
:index="index"> </list-item>
  </div>
</template>
    
<script> 

import ListItem from '@/components/ListItem.vue'

export default {
  name: "bodies-list",
  props: ["bodies"],
  components: {
    "list-item": ListItem
  }
}
</script>

<style lang="css" scoped> 

</style>
