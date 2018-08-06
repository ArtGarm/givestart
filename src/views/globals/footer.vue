<template>
    <footer class="footer">

        <div class="mbox">
            <div class="topper">
                <div class="cols">
                    <div class="col">
                        <ul>
                            <li><a href="#">ראשי</a></li>
                            <li><a href="#">קרנות</a></li>
                            <li><a href="#">איך זה עובד</a></li>
                            <li><a href="#">המלצות</a></li>
                        </ul>
                        <div class="after-button">
                            <a href="#" class="add-butt">
                                <span> פתיחת קרן + </span>
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="texter">
                            <h4>התרומה ב GiveStart מאובטחת</h4>
                            <p>לורם איפסום דולור סיט אמט, קונסקטורר אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום </p>
                        </div>
                        <div class="after">
                            <div class="pay">
                                <div class="icons">
                                    <img src="../../assets/images/stack-pay1.png" alt="">
                                </div>
                                <div class="after-text">חברות אשראי</div>
                            </div>
                            <div class="ssl">
                                <div class="icons">
                                    <img src="../../assets/images/stack-pay2.png" alt="">
                                </div>
                                <div class="after-text">SSL</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="facebook">

                        </div>
                    </div>
                </div>
            </div>
            <div class="botter">
                <div class="siders">
                    <div class="copiright">© כל הזכויות שמורות למרכז הצדקה</div>
                    <a href="#" target="_blank" class="creators"> Created by winsite </a>                
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style lang="scss">
footer {
  .topper {
    border-top: 3px solid #747474;
    border-bottom: 1px solid #dcdcdc;
    padding: 60px 0;
  }
  .cols {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    .col {
      width: 100%;
      &:nth-child(1) {
        border-left: 2px solid #dcdcdc;
        padding: 0 0 0 50px;
        width: 240px;
      }
      &:nth-child(2) {
        border-left: 2px solid #dcdcdc;
        padding: 0 50px;
        width: calc(100% - 240px - 390px);
      }
      &:nth-child(3) {
        padding: 0 50px 0 0;
        width: 390px;
      }

      ul {
        list-style: none;
        padding: 0 0 15px;
        margin: 0;
        display: block;
        li {
          padding: 10px;
          display: block;
          &:nth-child(1) {
            padding-top: 0;
          }
        }
        a {
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s;
          font-family: "AlmoniDLAAA";
          color: rgb(116, 116, 116);
          font-weight: bold;
          text-transform: uppercase;
          &:hover {
            color: #5d368f;
          }
        }
      }
      .after-button {
        .add-butt {
          display: inline-block;
          text-decoration: none;
          border: 3px solid #5d368f;
          border-radius: 25px;
          padding: 10px 35px;
          transition: all 0.3s;
          span {
            font-size: 18px;
            font-weight: 900;
            font-family: "AlmoniDLAAA";
            color: rgb(42, 41, 41);
            text-transform: uppercase;
            line-height: 1;
            transition: all 0.3s;
          }
          &:hover {
            background-color: #5d368f;
            span {
              color: #fff;
            }
          }
        }
      }
    }
    .texter {
      padding-bottom: 20px;
      h4 {
        font-size: 18px;
        font-family: "AlmoniDLAAA";
        color: rgb(116, 116, 116);
        text-transform: uppercase;
        line-height: 1.375;
        font-weight: 900;
      }
      p {
        font-size: 16px;
        font-family: "AlmoniDLAAA";
        color: rgb(116, 116, 116);
        text-transform: uppercase;
        line-height: 1.375;
      }
    }
    .after {
      .pay {
        margin-left: 40px;
      }
      .ssl,
      .pay {
        display: inline-block;
        text-align: center;
      }
      .after-text {
        font-size: 16px;
        font-family: "AlmoniDLAAA";
        color: rgb(116, 116, 116);
        text-transform: uppercase;
        line-height: 1.375;
        padding-top: 8px;
      }
    }
  }
  .botter {
    padding: 25px 0;
    .siders {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .creators,
    .copiright {
      font-size: 16px;
      font-family: "AlmoniDLAAA";
      color: rgba(116, 116, 116, 0.749);
      text-transform: uppercase;
      text-decoration: none;
      line-height: 1.438;
      transition: all 0.3s;
    }
    .creators:hover {
      color: #5d368f;
    }
  }
}

@media screen and (max-width: 1320px) {
  footer .cols .col:nth-child(1) {
    padding: 0 0 0 20px;
    width: 210px;
  }
  footer .cols .col:nth-child(2) {
    padding: 0 20px;
    width: calc(100% - 210px - 360px);
  }
  footer .cols .col:nth-child(3) {
    padding: 0 20px 0 0;
    width: 360px;
  }
}

@media screen and (max-width: 920px) {
  footer .cols {
    flex-wrap: wrap;
    .col:nth-child(2) {
      width: 100%;
      order: 1;
      padding: 25px 0px;
      border-top: 2px solid #dcdcdc;
      border-left: none;
    }
    .col:nth-child(3) {
      padding-bottom: 15px;
    }
  }
  footer .topper {
    padding: 30px 0;
  }
}

@media screen and (max-width: 767px) {
  footer .cols {
    flex-wrap: wrap;
    .col:nth-child(2) {
      width: 100%;
      order: 2;
      padding: 25px 0px;
      border-top: 2px solid #dcdcdc;
      border-left: none;
    }
    .col:nth-child(3) {
      padding: 15px 0;
      width: 100%;
      max-width: 320px;
      margin: 0 auto;
    }
    .col:nth-child(1) {
      padding: 0;
      border: none;
      width: 100%;
      max-width: 240px;
      margin: 0 auto;
    }
  }
  footer .topper {
    padding: 30px 0;
  }
  footer .cols .col .after-button .add-butt {
    border: 2px solid #5d368f;
    span {
      font-size: 16px;
    }
  }
  footer .botter {
    padding: 15px 0;
  }
  footer .botter .creators,
  footer .botter .copiright {
    font-size: 12px;
  }
  footer .botter .siders {
    display: block;
    text-align: center;
  }
}
</style>
