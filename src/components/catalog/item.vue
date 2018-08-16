<template>

    <div class="item">
        <a href="#" class="con">
            <img src="images/single-item.jpg" alt="">
            <span class="tag">רווחה</span>
        </a>
        <div class="bot-part">
            <div class="named">
                <a href="#">
                    קניות לשבת עבור משפחות מתן בסתר
                </a>
            </div>
            <div class="total-pay">
                    2,500 ש”ח מומן
            </div>
            <div class="progressbar">
                <div class="counter">55%</div>
                <div class="bar">
                    <div class="readystate" style="left: calc(100% - 55%); " ></div>
                </div>
            </div>
            <div class="siders">
                <div class="peoplels">
                    <div class="humans-ico"></div>
                    <div class="count"> 
                        <strong> 22 </strong>
                        תורמים 
                    </div>
                </div>
                <div class="timer">
                    <div class="time-ico"></div>
                    <div class="count"> 
                        <strong>1</strong>
                        ימים נותרו
                    </div>
                </div>
            </div>
        </div>
    </div>  

</template>

<script>
import Item from "@/components/catalog/item.vue";

export default {
    
    name: "item",
    props: [
        
    ],
    data() {
        return {
            
        };
    }, 
    methods : {

    }
};
</script>

<style lang="scss" scoped>



</style>

