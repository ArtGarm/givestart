<template>
    <div class="header">
        <div class="siders">
            <div class="logo-part">
                <a href="/">
                    <img src="../../assets/images/logo.png" alt="">
                </a>
            </div>
            <div class="navigate-part">
                <nav
                    v-bind:class="{ active : openMenu }"
                >
                    <ul>
                        <li><a href="#">ראשי</a></li>
                        <li><a href="#">קרנות</a></li>
                        <li><a href="#">איך זה עובד</a></li>
                        <li><a href="#">המלצות</a></li>
                    </ul>
                </nav>
                <div class="searcher-btn">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 250.313 250.313" style="enable-background:new 0 0 250.313 250.313;" xml:space="preserve">
                        <g id="Search">
                            <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76
                                c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911
                                c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38
                                c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146
                                c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236
                                C170.146,140.044,140.043,170.146,102.911,170.146z"/>
                        </g>
                    </svg>
                </div>
                <a href="#" class="add-butt">
                    <span> פתיחת קרן + </span>
                </a>
                <div class="hidden-opener"
                    v-bind:class="{ active : openMenu }"
                    @click="openMobileMenu()"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      openMenu: false
    };
  },
  methods: {
    openMobileMenu() {
      this.openMenu = !this.openMenu;
    }
  }
};
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 40px;
  background-color: #fff;
  border-bottom: 1px solid #bcbcbc;
  .siders {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navigate-part {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      li {
        margin: 0 15px;
      }
    }
    a {
      padding: 10px 15px;
      display: block;
      text-decoration: none;
      border-radius: 20px;
      overflow: hidden;
      font-size: 18px;
      font-family: "AlmoniDLAAA";
      color: rgb(58, 58, 58);
      text-transform: uppercase;
      line-height: 1.15;
      letter-spacing: 0.12em;
      background-color: #fff;
      cursor: pointer;
      transition: all 0.3s;
      word-wrap: none;
      white-space: nowrap;
      &.active,
      &:hover {
        background-color: #e2dbeb;
      }
      &.active {
        font-weight: 700;
      }
    }
  }

  .searcher-btn {
    margin: 0 15px;
    position: relative;
    line-height: 1;
    width: 40px;
    height: 40px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      background-color: #e2dbeb;
      opacity: 0;
      transition: all 0.3s;
    }
    svg {
      position: absolute;
      z-index: 2;
      max-width: 20px;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:hover {
      &:before {
        opacity: 1;
      }
    }
  }
  .add-butt {
    margin: 0 15px 0 0;
    display: block;
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

  .hidden-opener {
    width: 30px;
    height: 30px;
    border: 2px solid #5d368f;
    margin: 0 10px 0 0;
    position: relative;
    display: none;
    transition: all 0.3s;
    span {
      position: absolute;
      width: 16px;
      height: 2px;
      background-color: #5d368f;
      left: calc(100% / 2 - 16px / 2);
      transition: all 0.3s;
      &:nth-child(1) {
        top: calc(50% - 1px);
      }
      &:nth-child(2) {
        top: calc(50% - 6px);
      }
      &:nth-child(3) {
        bottom: calc(50% - 6px);
      }
    }
    &.active {
      span {
        &:nth-child(1) {
          top: calc(50% - 1px);
          opacity: 0;
        }
        &:nth-child(2) {
          top: calc(50% - 1px);
          transform: rotate(45deg);
        }
        &:nth-child(3) {
          bottom: calc(50% - 1px);
          transform: rotate(-45deg);
        }
      }
    }
    &:hover {
      background-color: #5d368f;
      span {
        background-color: #fff;
      }
    }
  }
}

header .logo-part a {
  display: block;
}

@media screen and (max-width: 1320px) {
  .header {
    padding: 10px 15px;
    .logo-part {
      max-width: 160px;
      a {
        display: block;
      }
    }
    nav ul li {
      margin: 0 8px;
    }
    nav a {
      padding: 7px 10px;
      letter-spacing: 0.05em;
      font-size: 15px;
    }
    .add-butt {
      padding: 10px 25px;
      margin: 0 10px 0 0;
      span {
        font-size: 15px;
      }
    }
  }
}

@media screen and (max-width: 920px) {
  .header .searcher-btn {
    svg {
      max-width: 20px;
      fill: #5d368f;
      transition: all 0.3s;
    }
    &:hover {
      &:before {
        background-color: #5d368f;
      }
      svg {
        fill: #fff;
      }
    }
  }
  .header .searcher-btn {
    margin: 0 10px;
    width: 32px;
    height: 32px;
  }
}

@media screen and (max-width: 767px) {
  .header nav {
    position: absolute;
    top: 100%;
    opacity: 0;
    pointer-events: none;
    left: 0;
    right: 0;
    background-color: #fff;
    border-top: 2px solid #cbcbcb;
    border-bottom: 2px solid #cbcbcb;
    transition: all 0.3s;
    &.active {
      opacity: 1;
      pointer-events: auto;
    }
    ul {
      width: 100%;
      display: block;
      li {
        margin: 0;
        text-align: center;
      }
    }
    a {
      font-size: 18px;
      padding: 10px;
      border-radius: 0;
      &:hover {
        background-color: #5d368f;
        color: #fff;
      }
    }
  }
  .header .add-butt {
    padding: 0;
    width: 30px;
    height: 30px;
    border-width: 2px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 16px;
      height: 2px;
      background-color: #5d368f;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 2px;
      transition: all 0.3s;
    }
    &:after {
      content: "";
      position: absolute;
      width: 2px;
      height: 16px;
      background-color: #5d368f;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 2px;
      transition: all 0.3s;
    }
    &:hover {
      &:before,
      &:after {
        background-color: #fff;
      }
    }
    span {
      display: none;
    }
  }
  .header .searcher-btn {
    margin: 0 10px 0 0;
  }
  .header .hidden-opener {
    display: block;
  }
}

@media screen and (max-width: 479px) {
  .header .logo-part {
    max-width: 130px;
  }
}
</style>
