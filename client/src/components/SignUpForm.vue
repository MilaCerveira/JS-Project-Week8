<template>
    <div>
    <form id="signup-form">
       <div class="form-item">
        <label class="label"></label>
        <input type="text" placeholder="First Name" class="input" first="first" v-model=first>
      </div>
      <div class="form-item">
        <label class="label"></label>
        <input type="text" placeholder="Last Name" class="input" last="last" v-model=last>
      </div>
      <div class="form-item">
        <label class="label"></label>
        <input type="email" placeholder="Email" class="input" name="email" v-model="email">
      </div>
      <button type="submit" class="button" @click.prevent>Submit</button>
      </form>
    </div>
</template>
<script>
export default {
data(){
    return{ 
        first: '',
        last: '',
        email: '',

    };
},
}
</script>
<style scoped>
#signup-form{
  margin-left: 40px;
}
</style>
