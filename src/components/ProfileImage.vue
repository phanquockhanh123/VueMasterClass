<template>
  <div>
<img :src="imageLink"
  class="h-8 w-8 rounded-3xl object-contain">
  </div>
  
</template>

<script>

export default({
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://img.freepik.com/free-vector/male-cartoon-face-closing-his-eyes_1308-135183.jpg?t=st=1716776502~exp=1716777102~hmac=b1ac7f0c492ea4b0d3675cd58f5"
    }
  },
})
</script>
