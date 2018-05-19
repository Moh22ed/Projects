<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light navbar-light">
      <div class="container">
      <a href="/" class="navbar-brand">vCustomer</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#Nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="Nav">
        <div class="navbar-nav">
          <a href="/about" class="nav-item nav-link">About</a>
        </div>
        <div class="navbar-nav ml-auto">
          <a href="/add" class="nav-item nav-link">AddCustomers</a>
        </div>
      </div>
    </div>
    </nav>
<router-view></router-view>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style>
.navbar{
  border-bottom:1px solid #e3e3e3;
}

</style>
