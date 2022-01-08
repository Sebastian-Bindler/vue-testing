<template>
  <div class="calc">

      <h1>Calc</h1>
      <input type="number" v-model.number=$store.state.num1.value>
    <select v-model="selected" v-model.number=$store.state.operator.value>
        <option value=0>+</option>
        <option value=1>-</option>
        <option value=2>*</option>
        <option value=3>/</option>
    </select>   

      <input type="number" v-model.number=$store.state.num2.value>
      = {{ sum }} 

      
    
  </div>
</template>

<script>
export default {
      name: 'Calc',
  props: {
    msg: String
  },


  computed: {
      sum() {
          return this.$store.getters.getSum;
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
