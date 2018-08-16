<template>
    

    <div class="line" 
        :class="{ active : show }"
    >
        <div @click="show = !show" class="named">
            {{ tabTitle }}
        </div>
        <transition name="bounce"
            v-on:enter="enter"
            v-on:leave="leave"
        >
            <div v-if="show" class="hidden">
                <div class="texter" v-html="tabContent"></div>
            </div>
        </transition>
    </div>


</template>

<script>
import Velocity from 'velocity-animate';

export default {
    name: "accordion_line",
    props: ['tabTitle', 'tabContent'],
    data() {
        return {
            show: false
        };
    }, 
    
    methods : {
        enter: function (el, done) {
            Velocity(el, "stop")
            Velocity(el, "slideDown" , { 
                duration: 500,
                easing: "easeOutQuart",
                queue: false
            
            }, { complete: done })

            //Velocity(el, { fontSize: '1em' }, { complete: done })
        },
        leave: function (el, done) {
            Velocity(el, "stop")
            Velocity(el, "slideUp" , { 
                duration: 500,
                easing: "easeOutQuart",
                queue: false
            }, { complete: done } )
        }
    }
};
</script>

<style lang="scss">
    
    .line{ padding: 20px 70px;
        .named{font-size: 28px; font-family: "AlmoniTzarAAA"; color: rgb(255, 255, 255); line-height: 1.2; position:  relative; font-weight: 300; 
        transition: all 0.3s; cursor: pointer;
            &:before{ content: ''; position: absolute; width: 20px; height: 2px; background-color: #59655c; left: calc(100% + 60px/2 - 10px); top: calc(50% - 1px); transition: all 0.3s; }
            &:after{ content: ''; position: absolute; width: 2px; height: 20px; background-color: #59655c; left: calc(100% + 60px/2 - 1px); top: calc(50% - 20px/2); transition: all 0.3s; }
        }
        .texter{ padding: 20px 0 0;
            p{font-size: 19px; font-family: "AlmoniDLAAA"; color: rgb(255, 255, 255); line-height: 1.263; }
        }   

        &.active{
            .named{ color: #76b125;
                &:before{ background-color: #fff; }
                &:after{ transform: rotate(90deg); background-color: #fff; }
            }
        }
    }

</style>
