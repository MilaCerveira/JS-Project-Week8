<template lang="html">
<div> 
  <p>{{ item.englishName }} </p>
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