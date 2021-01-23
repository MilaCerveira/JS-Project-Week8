<template lang="html">
    <div class="dropdown">
    <input class="dropdown-input" ref="dropdowninput" v-model.trim="inputValue" v-if="Object.keys(selectedItem).length === 0" type="text" placeholder="Find body" />
    <div v-else @click="resetItem" class="dropdown-selected">{{ selectedItem.englishName }}</div>
    <div v-show="inputValue && apiLoaded" class="dropdown-list">
      <div v-show="itemVisible(item)" v-for="item in itemList.bodies" :key="item.englishName" class="dropdown-item" @click="selectItem(item)">
      {{item.englishName }}
    </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
    return {
      inputValue: "",
      itemList: [],
      selectedItem: {},
      apiLoaded: false,
      apiUrl: 'http://api.le-systeme-solaire.net/rest/bodies/'
    };
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      axios.get(this.apiUrl)
      .then(response => {
        this.itemList = response.data
        this.apiLoaded = true
      } )
    },
    itemVisible (item) {
      let currentName = item.englishName.toLowerCase()
      let currentInput = this.inputValue.toLowerCase()
      return currentName.includes(currentInput)
    },
    selectItem (theItem) {
      this.selectedItem = theItem
      this.inputValue = ''
      this.$emit('on-item-selected', theItem)
    },
    resetItem(){
      this.selectedItem = {}
      this.$nestTick( () => this.$refs.dropdowninput.focus() )
      this.$emit('on-item-reset')
    }
  },



}
</script>

<style>
.dropdown{
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.dropdown-input, .dropdown-selected{
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus, .dropdown-selected:hover{
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder{
  opacity: 0.7;
}
.dropdown-selected{
  font-weight: bold;
  cursor: pointer;
}
.dropdown-list{
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.dropdown-item{
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover{
  background: #edf2f7;
}
.dropdown-item-flag{
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0px;
}

</style>