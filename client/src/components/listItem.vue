<template lang="html">
<div> 
  <p>this is where each individual item will appear</p>
</div>
</template>



<script>

import ItemDetail from './ItemDetail.vue';

export default{
  name: 'list-item',
  props:['item'],
  components: {
    'item-detail': ItemDetail,

  }
}
</script>

<style lang="css" scoped>
  
</style>