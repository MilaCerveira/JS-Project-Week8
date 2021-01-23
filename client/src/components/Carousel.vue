<template>
    <div id="slides" v-if="slides.length > 1">
        <transition-group tag="div" :name="transitionName" class="slides-group">
            <div v-if="show" :key="current" class="slide" :style="{ backgroundImage: `url(${slides[current].image})` }">
                <h1>{{slides[current].text}}</h1>
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
                { 
                    text: "Mercury",
                    image: "https://scx2.b-cdn.net/gfx/news/hires/2014/mercury.jpg" 
                }, 
                { 
                    text: "Venus",
                    image: "https://www.sciencealert.com/images/2020-09/processed/venus-clouds_1024.jpg",
                }, 
                { 
                    text: "Earth",
                    image: "https://i.dailymail.co.uk/1s/2021/01/05/09/37618494-9113999-image-a-1_1609840132968.jpg"
                },
                {
                    text:'Mars',
                    image: 'https://scitechdaily.com/images/Mars-Red-Planet-Highlights-scaled.jpg',
                },
                {
                    text:'Jupiter',
                    image: 'https://cdn.zmescience.com/wp-content/uploads/2020/09/io-jupiter-planet-astronomy-satellite-space-star-solar-system-space-wallpaper.jpg',
                },
                  {
                    text:'Saturn',
                    image: 'https://nypost.com/wp-content/uploads/sites/2/2020/01/asteroids-jupiter-01.jpg?quality=80&strip=all',
                },
                {
                    text:'Uranus',
                    image: 'https://www.weatherboy.com/wp-content/uploads/2017/10/Uranus.jpg',
                },
                {
                    text:'Neptune',
                    image: 'https://miro.medium.com/max/1200/1*-ROuDt26TFxh4shlF4bDJg.jpeg',
                },
            ]
        }
    },
    methods: {
        slide(dir) {
            this.direction = dir;
            dir === 1 ? (this.transitionName = "slide-next") : (this.transitionName = "slide-prev");
            var len = this.slides.length;
            this.current = (this.current + dir % len + len ) % len;
        }
    },
    mounted() {
        this.show = true;
    }
}
</script>
<style>
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-enter {
        opacity: 0;
    }

    .slide-next-enter-active,
    .slide-next-leave-active {
        transition: transform 0.5s ease-in-out;
    }
    .slide-next-enter {
        transform: translate(100%);
    }
    .slide-next-leave-to {
        transform: translate(-100%);
    }

    .slide-prev-enter-active,
    .slide-prev-leave-active {
        transition: transform 0.5s ease-in-out;
    }
    .slide-prev-enter {
        transform: translate(-100%);
    }
    .slide-prev-leave-to {
        transform: translate(100%);
    }

    #slides {
        width: 100%;
        height: 300px;
        position: relative;
    }

    #slides h1 {
        font-family: "Montserrat";
        color:white;
    }

    .slide {
        width: 100%;
        height: 300px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .btn {
        z-index: 10;
        cursor: pointer;
        border: 3px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        position: absolute;
        top: calc(50% - 35px);
        left: 1%;
        transition: transform 0.3s ease-in-out;
        user-select: none;
        color: white;
    }

    .btn-next {
        left: auto;
        right: 1%;
    }

    .btn:hover {
        transform: scale(1.1);
    }
</style>