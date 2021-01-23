<template>
    
</template>
<script>
export default {
    name: "carousel",
    data() {
        return { 
            current: 0,
            direction: 1,
            transitionName: "fade",
            show: false,
            slides: [
                { className: "blue" }, 
                { className: "red" }, 
                { className: "yellow" }
            ]
        }
    },
    methods: {}
}
</script>
<style scoped>

</style>