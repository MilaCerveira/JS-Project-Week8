<template>
    <div>
    <form id="signup-form">
       <div class="form-item">
        <label class="label">Name</label>
        <input type="text" class="input" name="name" v-model="name">
      </div>
      <div class="form-item">
        <label class="label">Email</label>
        <input type="email" class="input" name="email" v-model="email">
      </div>
      <button type="submit" class="button" @click.prevent>Submit</button>
      </form>
    </div>
</template>
<script>
export default {
data(){
    return{ 
        name: '',
        email: '',

    };
},
}
</script>
<style scoped>

</style>
