<template>

    <div class="main-tabs-wrap">
        <div class="mbox">
            <div class="topper-category">
                <ul>
                    <li>
                        <div class="cat" 
                            :class="{ active : currentTab == '#hot' || currentTab == '' }"
                            @click="changeHash('hot')"
                        > קרנות חמות </div>
                    </li>
                    <li>
                        <div class="cat"
                            :class="{ active : currentTab == '#toend' }"
                            @click="changeHash('toend')"
                        > לקראת סיום </div>
                    </li>
                    <li>
                        <div class="cat"
                            :class="{ active : currentTab == '#new' }"
                            @click="changeHash('new')"
                        > קרנות חדשות </div>
                    </li>
                </ul>
            </div>
            <div class="content-items">
                <div class="list-items">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
                <div class="open-caalog">
                    <a href="#" class="butt">
                        <span> הצג הכל </span>
                    </a>
                </div>
            </div>
        </div>
    </div>    

</template>

<script>
import Item from "@/components/catalog/item.vue";

export default {
    
    name: "catalog",
    components: {
        Item
    },
    data() {
        return {
            show: true,
        };
    }, 
    computed :{
        currentTab(){
            return this.$store.state.tabsOnMain;
            
        },
    },
    methods : {

        changeHash( hashName ){
            this.$store.dispatch('changeHashOnMain' , hashName );
        }

    }
};
</script>

<style lang="scss">

    .main-tabs-wrap{

        .title-page{ padding: 0px;
            h1{font-size: 50px; font-family: "AlmoniTzarAAA"; color: rgb(42, 41, 41); line-height: 1.2; text-align: center;}
        }

        .topper-category{ padding: 40px 0;
            ul{ list-style: none; padding: 0; margin: 0; display: flex; align-items: center; justify-content: center;
                li{ margin: 0 25px; }
            }
            .cat{padding: 15px 0; position: relative; font-size: 34px; font-family: "AlmoniTzarAAA"; color: rgb(42, 42, 42);  text-transform: uppercase; font-weight: 300; cursor: pointer; display: block; text-decoration: none;
                &:before{ content: ''; position: absolute; bottom: 0; left: 95%; right: 5%; height: 3px; background-color: #2a2a2a; opacity: 0; transition: all 0.3s;}
                &.active, &:hover{ color: rgb(93, 54, 143);
                    &:before{ left: 5%; right: 5%; opacity: 1; }
                }
            }
            &.smaller-category{
                .cat{font-size: 21px;}
            }
              
        }
        .list-items{ display: flex; align-items: flex-start; justify-content: flex-start; flex-wrap: wrap; margin: 0 -10px; }
        .item{ max-width: 365px; width: 100%; margin: 0 calc( (100% - 365px*3)/6) 40px; background-color: rgb(255, 255, 255); box-shadow: 0px 0px 10px 0px rgba(9, 9, 9, 0.35); transition: all 0.3s;
            &:hover{ box-shadow: 0px 0px 20px 0px rgba(9, 9, 9, 0.5); }
            .con{ display: block; width: 100%; height: 250px; position: relative; overflow: hidden; 
                img{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: none; min-width: 100%; min-height: 100%; z-index: 1; }
                .tag{ position: absolute; bottom: 0; right: 0; z-index: 2; background-color: #2a2a2a; padding: 10px 20px; text-align: center; font-size: 16px; font-family: "AlmoniDLAAA"; color: rgb(255, 255, 255); text-transform: uppercase; line-height: 1; font-weight: 900; }
            }
            .bot-part{ padding: 20px 10px; }
            .named{ padding-bottom: 15px;
                a{font-size: 24px; font-family: "AlmoniTzarAAA"; color: rgb(42, 42, 42); text-transform: uppercase; line-height: 1.2; text-decoration: none; }
            }
            .total-pay{ padding-bottom: 20px; font-size: 24px; font-family: "AlmoniTzarAAA"; color: rgb(100, 69, 135); text-transform: uppercase; line-height: 1.2; font-weight: 300; }
            .progressbar{ padding-bottom: 10px;
                .counter{ font-size: 24px; font-weight: 900; font-family: "AlmoniDLAAA"; color: rgb(100, 69, 135); text-transform: uppercase; line-height: 1.167;}
                .bar{ position: relative; width: 100%; background-color: #d7d6d6; border-radius: 5px; overflow: hidden; height: 10px;
                    .readystate{ position: absolute; right: 0; bottom: 0; top: 0; background-color: #644587; }
                }
            }
            .siders{ display: flex; justify-content: center; align-items: center; position: relative;
                &:before{ content: ''; position: absolute; top: 0; bottom: 0; left: 50%; width: 1px; background-color: #d7d6d6; }
                .peoplels, .timer{ width: 50%; padding: 5px 20px; display: flex; justify-content: center; align-items: center; }
                .humans-ico{ background-image: url(../../assets/images/humans-ico.png); width: 23px; height: 20px; background-position: center center; background-repeat: no-repeat; }
                .time-ico{background-image: url(../../assets/images/clock-ico.png); width: 22px; height: 22px; background-position: center center; background-repeat: no-repeat; }
                .count{ margin-right: 10px; font-size: 16px; font-family: "AlmoniDLAAA"; color: rgb(116, 116, 116); line-height: 1; font-weight: 16;
                    strong{ font-weight: 900; font-size: 24px; }
                }
            }
        }

        .open-caalog{ padding: 20px 0 50px; text-align: center; 
            a{ display: inline-block; text-decoration: none; border: 3px solid #5d368f; border-radius: 25px; padding: 10px 35px; transition: all 0.3s;
                span{font-size: 18px; font-family: "AlmoniDLAAA"; font-weight: 900; color: rgb(42, 41, 41); text-transform: uppercase; line-height: 1; transition: all 0.3s;}
                &:hover{ background-color: #5d368f;
                    span{ color: #fff; }
                }
            }
        }
        .navigate{ padding: 50px 0; display: flex; align-items: center; justify-content: center;
            a{ display: flex; align-items: center; justify-content: flex-start; text-decoration: none; margin: 0 10px;
                span{  margin: 0 8px; font-size: 18px; font-family: "AlmoniDLAAA"; font-weight: 900; color: rgb(75, 75, 75); text-transform: uppercase; line-height: 1.278; }
                svg{ max-width: 15px; width: 100%; fill:  rgb(75, 75, 75);}
                &.disabled{ opacity: 0.6; pointer-events: none; }
            }
        }
    }

</style>

