<template>
  <div class="container">
    <br>
     <Alert v-bind:message="alert" v-if="alert"></Alert>
    <br>
    <h1 class="display-4 my-3">Customers</h1>
    <hr>

    <input type="text" class="form-control my-2" placeholder="Search Last Name" v-model="search">
    <table class="table text-center">
      <thead class="bg-dark text-light">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody v-for="customer in name">
       <td>{{customer.first_name}}</td>
       <td>{{customer.last_name}}</td>
       <td>{{customer.email}}</td>
       <td><router-link class="btn btn-outline-dark" v-bind:to="'/view/' + customer.id">View</router-link></td>
      </tbody>
    </table>



  </div>
</template>

<script>
import Alert from './alert';
export default {

  data () {
    return {
      customers:[],
      search:'',
      alert:''
    }
  },
  created(){
     this.$http.get('http://slim/ap/customers').then(function(data){
       this.customers = data.body
     });
     if(this.$route.query.alert){
       this.alert = this.$route.query.alert;
     }
  },
  computed:{
    name(){
      return this.customers.filter((customer)=>{
        return customer.last_name.match(this.search);
      });
    }
  },
  components:{
    Alert
  }
}
</script>

<style scoped>

</style>
