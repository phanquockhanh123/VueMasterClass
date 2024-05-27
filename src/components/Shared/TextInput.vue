<template>
    <input
        type="text"
        :value="modelValue"
        class="w-full text-lg font-normal focus:outline-none"
        @input="$emit('input', $event.target.value)" />
</template>
<script>

export default {
   name: "TextInput",
    props: {
        modelValue: {
            type: String,
            required: false
        }
    },
    emits: [
        "update:modelValue"
    ],
   methods: {
    
   }
}
</script>
