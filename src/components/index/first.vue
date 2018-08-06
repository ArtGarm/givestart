<template>
    
    <div class="first-wrap" style="background-image: url(  );"
        :style="{ 'background-image' : 'url('+ backgroundURL +' )' }"
        >
        <div class="mbox">
            <div class="conteiner">
                <div class="texter-part">
                    <div class="texter">
                        <h1>
                            חסד של<br/>
                            גיוס המונים
                        </h1>
                        <h2>
                            בוא לגייס תרומות לעמותה
                            <br>
                            או למשהו פרטי באופן פשוט וקל!
                        </h2>
                        <p>הסבר פשוט של כמה שורות המסביר לאיזה אתר הגשוט של כמה שורות המסביר לאיזה אתר הגענו, הסבר פשוט</p>
                        <div class="read-more">
                            <a href="#">
                                <span>איך זה עובד?</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: "first",
  data() {
    return {
      backgroundURL: "../../assets/images/first-bunner-bg.jpg"
    };
  }
};
</script>

<style lang="scss" scoped>
.first-wrap {
  background-position: center center;
  background-size: cover;
  padding: 60px 0 100px;
  .texter {
    max-width: 410px;
    h1 {
      font-size: 100px;
      font-family: "AlmoniTzarAAA";
      color: rgb(255, 255, 255);
      line-height: 0.85;
      margin-bottom: 0px;
      font-weight: 400;
    }
    h2 {
      font-size: 32px;
      font-family: "AlmoniTzarAAA";
      color: rgb(255, 255, 255);
      text-transform: uppercase;
      line-height: 1;
      font-weight: 300;
      margin-bottom: 15px;
    }
    h3 {
      font-size: 28px;
      font-family: "AlmoniTzarAAA";
      color: rgb(255, 255, 255);
      text-transform: uppercase;
      line-height: 1;
      font-weight: 300;
      margin-bottom: 15px;
    }
    p {
      font-size: 19px;
      font-family: "AlmoniDLAAA";
      color: rgb(255, 255, 255);
      text-transform: uppercase;
      line-height: 1.2;
    }
  }
  .read-more {
    padding-top: 40px;
    a {
      padding: 10px 40px;
      display: inline-block;
      background-color: rgb(107, 167, 25);
      border-radius: 24px;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s;
      span {
        font-size: 19px;
        font-family: "AlmoniDLAAA";
        color: rgb(255, 255, 255);
        font-weight: 900;
        text-transform: uppercase;
        line-height: 1.2;
      }
      &:hover {
        background-color: #71bc19;
      }
    }
  }
}

@media screen and (max-width: 1320px){

    .first-wrap { padding: 100px 0; }
    .first-wrap .texter h1 { font-size: 80px; }
    .first-wrap .texter h2 { font-size: 26px; }
    .first-wrap .texter p { font-size: 17px; }
    .first-wrap .read-more { padding-top: 25px; }
    .first-wrap .read-more a span { font-size: 18px; }

}

@media screen and (max-width: 767px){

    .first-wrap { padding: 50px 0; }
    .first-wrap .texter { max-width: 290px; }
    .first-wrap .texter h1 { font-size: 48px; }
    .first-wrap .texter h2 { font-size: 22px; }
    .first-wrap .texter p { font-size: 15px; }
    .first-wrap .read-more { padding-top: 25px; }
    .first-wrap .read-more a span { font-size: 16px; }

}

@media screen and (max-width: 479px){
    .first-wrap{ background-position: right center; }
    .first-wrap .texter{ max-width: 100%; } 
}


</style>

