<template>
    
    <div class="steps-wrap">
        <div class="mbox">
            <div class="title-row">
                <h2>איך זה עובד</h2>
            </div>
            <div class="content-part">
                <img src="images/leaf-ico.png" class="asside-image" alt="">
                <div class="list-items"
                    :class="{
                        active0 : hoveredItem == 1,
                        active1 : hoveredItem == 2,
                        active2 : hoveredItem == 3
                    }"
                >
                    <div class="item"
                        @mouseover="focusItem(1)"
                        @mouseout="blurItem()"
                    >
                        <div class="con">
                            <img src="../../assets/images/step1.png" alt="">
                        </div>
                        <div class="about-text">
                            <div class="name">יצירה</div>
                            <div class="after-text">כל אחד יכול ליצור דף    מספר צעדים פשוטים</div>
                        </div>
                    </div>
                    <div class="item"
                        @mouseover="focusItem(2)"
                        @mouseout="blurItem()"
                    >
                        <div class="con">
                            <img src="../../assets/images/step1.png" alt="">
                        </div>
                        <div class="about-text">
                            <div class="name">יצירה</div>
                            <div class="after-text">כל אחד יכול למספר צעדים פשוטים</div>
                        </div>
                    </div>
                    <div class="item"                        
                        @mouseover="focusItem(3)"
                        @mouseout="blurItem()"
                    >
                        <div class="con">
                            <img src="../../assets/images/step1.png" alt="">
                        </div>
                        <div class="about-text">
                            <div class="name">יצירה</div>
                            <div class="after-text">כל אחד יכול ליפר צעדים פשוטים</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="readmore">
                <a href="#" class="butt">
                    <span> למד עוד </span>
                </a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: "steps",
  data() {
    return {
        some: '123',
        hoveredItem: ''
    };
  }, 
  methods : {
        focusItem( index ){
            this.hoveredItem = index;
        },
        blurItem( ){
            this.hoveredItem = '';
        }
  }
};
</script>

<style lang="scss" scoped>

    .steps-wrap{ padding: 110px 0;
        .title-row{ text-align: center; padding-bottom: 100px;
            h2{font-size: 65px; font-family: "AlmoniTzarAAA"; color: rgb(42, 41, 41); font-weight: 300; text-transform: uppercase; line-height: 1;}
        }
        .readmore{ padding: 40px 0 0; text-align: center; 
            a{ display: inline-block; text-decoration: none; border: 3px solid #5d368f; border-radius: 25px; padding: 10px 35px; transition: all 0.3s;
                span{font-size: 18px; font-family: "AlmoniDLAAA"; font-weight: 900; color: rgb(42, 41, 41); text-transform: uppercase; line-height: 1; transition: all 0.3s;}
                &:hover{ background-color: #5d368f;
                    span{ color: #fff; }
                }
            }
        }
        .list-items{ display: flex; align-items: flex-start; justify-content: space-between; max-width: 940px; margin: 0 auto; position: relative;
            .con{ width: 164px; height: 164px; position: relative; border-width: 2px;  border-color: #d7d6d6; border-style: solid; border-radius: 50%; display: flex; align-items: center; justify-content: center; background-color: #fff; margin: 0 auto; z-index: 5; transition: all 0.3s;
                img{ max-width: 80%; max-height: 80%;}
            }
            .about-text{ max-width: 200px; text-align: center;
                .name{ font-size: 34px; font-family: "AlmoniTzarAAA"; font-weight: 300; color: rgb(100, 69, 135); text-transform: uppercase; line-height: 1; padding: 20px 0 10px;}
                .after-text{font-size: 18px; font-family: "AlmoniDLAAA"; color: rgb(42, 41, 41); text-transform: uppercase;  line-height: 1.2; opacity: 0; transition: all 0.3s; }
            }
            .item{ position: relative;                 
                &:before{ content: ''; position: absolute; left: 90%; top: calc(164px/2 - 1px); width: 300px; height: 2px; background-color: #d7d6d6; transition: all 0.3s; }
                &:nth-child(1):before{display: none;}

            }
            &.active0{
                .item:nth-child(1){
                    &:before{ content: ''; position: absolute; left: 90%; top: calc(164px/2 - 1px); width: 300px; height: 2px; background-color: #d7d6d6; }
                    .con{ border-color: #5d368f; }
                    .after-text{ opacity: 1; }
                }
            }

            &.active1{
                .item:nth-child(1){
                    &:before{ content: ''; position: absolute; left: 90%; top: calc(164px/2 - 1px); width: 300px; height: 2px; background-color: #d7d6d6; }
                    .con{ border-color: #5d368f; }
                    .after-text{ opacity: 0; }
                }
                .item:nth-child(2){
                    &:before{ background-color: #5d368f; }
                    .con{ border-color: #5d368f; }
                    .after-text{ opacity: 1; }
                }
            }

            &.active2{
                .item:nth-child(1){
                    &:before{ content: ''; position: absolute; left: 90%; top: calc(164px/2 - 1px); width: 300px; height: 2px; background-color: #d7d6d6; }
                    .con{ border-color: #5d368f; }
                    .after-text{ opacity: 0; }
                }
                .item:nth-child(2){
                    &:before{ background-color: #5d368f; }
                    .con{ border-color: #5d368f; }
                    .after-text{ opacity: 0; }
                }
                .item:nth-child(3){
                    &:before{ background-color: #5d368f; }
                    .con{ border-color: #5d368f; }
                    .after-text{ opacity: 1; }
                }
            }           

        }
        .content-part{ position: relative; }
        .asside-image{ position: absolute; top: 80%; transform: translateY(-50%); opacity: 0.25; right: 100%; }
    }

    @media screen and (max-width: 1320px){
        .steps-wrap {padding: 60px 0; }
        .steps-wrap .title-row { padding-bottom: 30px;}
        .steps-wrap .title-row h2 { font-size: 46px; }

        .steps-wrap .list-items .con { width: 140px; height: 140px; }
        .steps-wrap .list-items .item:before{ left: 80%;  top: calc(140px/2 - 1px); }
        .steps-wrap .readmore { padding: 25px 0 0; }
    }

    @media screen and (max-width: 920px){
        .steps-wrap .list-items .item:before{ width: 200px; }
    }

    @media screen and (max-width: 767px){
        .steps-wrap .list-items{ display: block; }
        .steps-wrap .list-items .item{ display: flex; align-items: center; justify-content: space-between; margin: 0 auto 25px; max-width: 320px;  }
        .steps-wrap .list-items .item:before { display: none; }
        .steps-wrap .list-items .con{ order: 2; margin: 0; }
        .steps-wrap .list-items .about-text{ order: 1; width: calc(100% - 120px); }
        .steps-wrap .list-items .about-text .after-text{ opacity: 1; }
        .steps-wrap .list-items .about-text .name { font-size: 26px; }
        .steps-wrap .list-items .about-text .after-text { font-size: 16px; }
        .steps-wrap .list-items .con { width: 110px; height: 110px; }
        .steps-wrap .list-items .con img { max-width: 50%; max-height: 50%; }
        .steps-wrap .asside-image{ display: none; }
        .steps-wrap { padding: 40px 0; }
        .steps-wrap .readmore a {  border: 2px solid #5d368f; }
        .steps-wrap .readmore a span { font-size: 16px; }

    }



</style>

