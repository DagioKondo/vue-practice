<script setup lang="ts">
const itemName1 = "Desk"
const itemName2 = "Bike"

const price1 = 40000
const price2 = 20000

const url1 = "https://www.youtube.com/"

const buy = (itemName: string) => {
  alert("Are you sure to buy" + itemName + "?")
}

</script>

<template>
  <div class="container">
    <h1>Payment</h1>
    <div class="payment">
      <label>{{ itemName1 }}</label>
      <label>{{ price1 }} yen</label>
      <a v-bind:href="url1">bought at...</a>
      <button v-on:click="buy(itemName1)">BUY</button>
    </div>
    <div class="payment">
      <label>{{ itemName2 }}</label>
      <label>{{ price2 }} yen</label>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.payment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 400px;
  background-color: darkslategrey;
  margin-bottom: 8px;
}

label {
  font-size: 20px;
  font-weight: bold;
}
</style>