<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span v-bind:class="actionClasses">
        {{action}}
      </span><br/>
      for everyone
    </h1>
    <h1>Find your next job LGCNS</h1>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";
export default {
  name: "HeadLine",
  data() {
    return {
      action: "Build",
      interval: null
    }
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true
      };
    }
  },
  created() {
    this.changeTitle();
  },
  beforeUnMount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    }
  }
}
</script>
<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
