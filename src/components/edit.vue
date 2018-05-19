<template>
  <div class="container">
    <h1 class="display-4 my-3">Update Customer</h1>
    <hr>
    <form>
    <div class="well card-body bg-ligh">
      <p class="lead text-center my-2">Information</p>
      <div class="form-group">
        <input type="text" class="form-control" v-model="customer.first_name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="customer.last_name">
      </div>
    </div>

    <div class="well card-body bg-light">
      <p class="lead text-center my-2">Contact</p>
      <div class="form-group">
        <input type="text" class="form-control" v-model="customer.phone">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="customer.email">
      </div>
    </div>

    <div class="well card-body bg-light">
      <p class="lead text-center my-2">Location</p>
      <div class="form-group">
        <input type="text" class="form-control" v-model="customer.address">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="customer.city">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="customer.state">
      </div>
      <br>
      <button class="btn btn-outline-dark btn-block" @click.prevent="update">Submit</button>
    </div>


    </form>

  </div>
</template>

<script>
export default {

  data () {
    return {
     customer:'',
     id:this.$route.params.id
    }
  },
methods:{
  update(){
    this.$http.put('http://slim/api/customer/update/' + this.id,this.customer).then(function(){
      this.$router.push({path:'/', query:{alert:'Customer Updated'}});
    });
  }
},
created(){
  this.$http.get('http://slim/api/customer/' + this.id).then(function(data){
    this.customer = data.body;
  });
}
}
</script>

<style>
.well{
  border:1px solid #e3e3e3;
  margin:20px 0;
  border-radius:10px;
}



</style>
