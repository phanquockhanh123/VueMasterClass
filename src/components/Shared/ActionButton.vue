<template>
  <button
  @click="login()"
    :class="buttonClass">{{ text }}</button>
</template>

<script>

export default ({
  name: "ActionButton",
  methods: {
    login(){
      this.$emit('login')
    }
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      }
    },
  },
  data() {
    return {
      primary: this.isPrimary,
    }
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true, // {error true}
      }
    }
  }
})
</script>

<style scoped>
button {
  @apply p-5 py-3 font-medium;
}

.primary {
  @apply rounded bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:text-brand-blue-2 hover:text-white;
}
</style>


