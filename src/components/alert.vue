<template>
  <div>
<div class="alert alert-warning alert-dismissible" role="alert">
  <button type="button" class="Close"  data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  {{message}}
</div>
  </div>
</template>

<script>
export default {
props:['message'],
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
