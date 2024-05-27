<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1">
          
        </div>
        <div class="col-span-5 col-start-2">
          <head-line></head-line>
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img class="h-80 w-80 object-contain" src="https://img.freepik.com/free-vector/male-cartoon-face-closing-his-eyes_1308-135183.jpg?t=st=1716776502~exp=1716777102~hmac=b1ac7f0c492ea4b0d3675cd58f5" />
        </div>
        
        <div class="col-span-1 col-start-12">
          
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import HeadLine from "@/components/JobSearch/HeadLine.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default ({
  name: "TheHero",
  components: {
    HeadLine,
    JobSearchForm
  },
})
</script>
