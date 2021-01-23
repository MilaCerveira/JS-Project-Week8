<template>
    <div id="slides" v-if="slides.length > 1">
        <transition-group tag="div" :name="transitionName" class="slides-group">
            <div v-if="show" :key="current" class="slide" :class="slides[current].className">
                <p>Slide: {{slides[current].className}}</p>
            </div>
        </transition-group>
        <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
            prev
        </div>
        <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
            next
        </div>
    </div>
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
    methods: {},
    mounted() {
        this.show = true;
    }
}
</script>
<style scoped>

</style>