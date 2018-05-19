<template>
  <div class="container">
    <h1 class="display-4 my-2">Add Customer</h1>
    <hr>


    <form class="my-3">
      <div class="well bg-light card-body">
        <p class="lead text-center my-1">Information</p>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
      </div>
      </div>

      <div class="well bg-light card-body">
         <p class="lead text-center my-1">Contact</p>
         <div class="form-group">
           <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
         </div>
         <div class="form-group">
           <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
         </div>
      </div>

      <div class="well bg-light card-body">
        <p class="lead my-1 text-center">Location</p>
         <div class="form-group">
        <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="City" v-model="customer.city">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="State" v-model="customer.state">
          <br>
          <button class="btn btn-outline-dark btn-block" @click.prevent="post">Submit</button>
        </div>
      </div>

    </form>

  </div>
</template>

<script>
export default {

  data () {
    return {
      customer:{}

    }
  },

methods:{
  post(){
    this.$http.post('http://slim/api/customer/add', this.customer).then(function(){
      this.$router.push({path:'/', query:{alert:'Customer Added'}});
    });
  }
}
}
</script>

<style scoped>
.well{
  margin:20px 0;
  border-radius:10px;
  border:1px solid #e3e3e3;
}

</style>
