<template>
  <div>
    <input :type="type" :placeholder="placeholder" :value="modelvalue" @input="updatevalue"/>
  </div>
</template>

<script>
export default {
    name: "InputField",
    props: {
        type: String,
        placeholder: String,
        modelvalue: String,
    },
    emits: ["update:modelValue"],
    methods: {
        updatevalue(event) {
            const value = event.target.value.trim()
            this.$emit("update:modelValue", value)
        }
    }
}
</script>

<style>

</style>