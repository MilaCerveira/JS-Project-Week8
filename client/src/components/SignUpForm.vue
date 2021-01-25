<template>
    <div>
    <form id="signup-form">
       <div class="form-item">
        <label class="label">First Name</label>
        <input type="text" placeholder="First Name" class="input" first="first" v-model=first>
      </div>
      <div class="form-item">
        <label class="label">Last Name</label>
        <input type="text" placeholder="Last Name" class="input" last="last" v-model=last>
      </div>
      <div class="form-item">
        <label class="label">Email</label>
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

</style>
