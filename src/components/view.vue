<template>
  <div class="container">
    <h1 class="display-4 my-3">Details</h1>
    <hr>
    <h1 class=" my-2">{{customer.first_name}} {{customer.last_name}}</h1>
    <button class="btn btn-outline-danger my-1" @click="dell">Delete</button>
    <router-link class="btn btn-outline-primary my-1" v-bind:to="'/edit/' + customer.id">Update</router-link>
    <div class="my-4">
      <ul class="list-group">
        <li class="list-group-item"><strong>Phone:</strong> {{customer.phone}}</li>
        <li class="list-group-item"><strong>Email:</strong> {{customer.email}}</li>
      </ul>
      <br>
      <ul class="list-group">
        <li class="list-group-item"><strong>Address:</strong> {{customer.address}}</li>
        <li class="list-group-item"><strong>City:</strong> {{customer.city}}</li>
        <li class="list-group-item"><strong>State:</strong> {{customer.state}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
      customer:'',
      id: this.$route.params.id

    }
  },
  created(){
      this.$http.get('http://slim/api/customer/'+ this.id).then(function(data){
     this.customer = data.body;
      });
  },
  methods:{
    dell(){
      this.$http.delete('http://slim/api/customer/delete/' + this.id).then(function(){
      this.$router.push({path:'/', query:{alert:'Customer Deleted'}})
      });
    }
  }
}
</script>

<style>

</style>
