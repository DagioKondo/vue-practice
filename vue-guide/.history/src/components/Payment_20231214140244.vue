<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>最近の支出</h1>
    <div class="payment">
      <label>カレーライス</label>
      <label>400円</label>
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
  height: 80px;
  width: 400px;
  background-color: aqua;
}

label {
  font-size: 20px;
}
</style>