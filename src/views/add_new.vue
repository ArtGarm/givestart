<template>

    <div class="add-new-page">
        <div class="mbox">
            <div class="conteiner">
                
                <Breadcrumbs />

                <div class="title-page">
                    <h1> פתיחת קרן </h1>
                    <div class="icon">
                        <img src="images/content-ico1.png" alt="">
                    </div>
                </div>
                <div class="texter">
                    <h2>חשוב לנו שתדע</h2>
                    <p>
                        <strong>גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</strong>
                    </p>
                    <p>
                        קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. לורם איפסום דולור סיט אמט, קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
                    </p>
                </div>
                <div class="formpart">

                    <div class="part">
                        <div class="row">
                            <div class="title-row">
                                <h2>פרטים כלליים</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="checker">
                                <label>
                                    <input type="radio" name="choose" checked="checked" value="1">
                                    <span class="beutify"></span>
                                    <span class="text-lbl">קרן עבור עמותה</span>
                                </label>
                            </div>
                            <div class="checker">
                                <label>
                                    <input type="radio" name="choose" value="2">
                                    <span class="beutify"></span>
                                    <span class="text-lbl"> קרן פרטית </span>
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="inputer">
                                <div class="labled">שם עמותה</div>
                                <input type="text" name="name1">
                            </div>
                            <div class="inputer">
                                <div class="labled"> מספר ע״ר</div>
                                <input type="text" name="name2">
                            </div>
                            <div class="inputer">
                                <div class="labled"> טלפון </div>
                                <input type="text" name="name3">
                            </div>
                            <div class="inputer">
                                <div class="labled"> כתובת דוא״ל </div>
                                <input type="text" name="name4">
                            </div>
                        </div>
                        <div class="row">
                            <div class="inputer">
                                <div class="labled">שם איש קשר</div>
                                <input type="text" name="name5">
                            </div>
                            <div class="inputer">
                                <div class="labled">טלפון איש קשר</div>
                                <input type="text" name="name6">
                            </div>
                        </div>
                    </div>
                
                    <div class="part">
                        <div class="row">
                            <div class="title-row">
                                <h2> פרטי הקרן </h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="inputer long">
                                <div class="labled"> שם הקרן  </div>
                                <input type="text" name="name7">
                            </div>
                            <div class="inputer">
                                <div class="labled"> הסכום הנדרש </div>
                                <input type="text" name="name8">
                            </div>
                            <div class="inputer">
                                <div class="labled"> תאריך יעד </div>
                                <input type="text" name="name9">
                            </div>
                        </div>
                        <div class="row">
                            <div class="inputer long">
                                <div class="labled"> סוג הקרן  </div>
                                <select name="sel">
                                    <option value="1"> התרומות מותנות בגיוס מלא 1 </option>
                                    <option value="2"> התרומות מותנות בגיוס מלא 2 </option>
                                    <option value="3"> התרומות מותנות בגיוס מלא 3 </option>
                                    <option value="4"> התרומות מותנות בגיוס מלא 4 </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="inputer full big">
                                <div class="labled"> סיפור המקרה </div>
                                <textarea name="text"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="labled"> תמונות </div>
                            <ul class="file-list">
                                <li>
                                    <div class="siders">
                                        <input type="file" name="file1" id="file1">
                                        <div class="description">
                                            <input type="text" name="file1">
                                        </div>
                                        <div class="button-show">
                                            <label for="file1" class="butt">
                                                <span>עיון</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="siders">
                                        <input type="file" name="file2" id="file2">
                                        <div class="description">
                                            <input type="text">
                                        </div>
                                        <div class="button-show">
                                            <label for="file2" class="butt">
                                                <span>עיון</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="file-loader">
                                <input type="file" name="filelist[]" id="filelist" multiple>
                                <label for="filelist">
                                    <div class="icon"> 
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                            <path d="M359.784,103.784v262.919c0,57.226-46.557,103.784-103.784,103.784s-103.784-46.557-103.784-103.784V103.784
                                                c0-34.336,27.934-62.27,62.27-62.27c34.336,0,62.27,27.934,62.27,62.27v262.919c0,11.445-9.312,20.757-20.757,20.757
                                                s-20.757-9.311-20.757-20.757V103.784H193.73v262.919c0,34.336,27.934,62.27,62.27,62.27s62.27-27.934,62.27-62.27V103.784
                                                C318.27,46.557,271.713,0,214.487,0S110.703,46.557,110.703,103.784v262.919C110.703,446.82,175.883,512,256,512
                                                s145.297-65.18,145.297-145.297V103.784H359.784z"/>
                                        </svg>
                                    </div>
                                    <div class="text-des">תמונה נוספת</div>
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="inputer full small">
                                <div class="labled"> הערות נוספות </div>
                                <textarea name="text2"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="part">
                        <div class="row siders">
                            <div class="politic">
                                <label>
                                    <input type="checkbox" name="confidential">
                                    <div class="beutify"></div>
                                    <div class="text-lbl">
                                        אני מבקש לפתוח קרן ומאשר את 
                                        <a href="#">תנאי השימוש</a>
                                    </div>
                                </label>
                            </div>
                            <div class="submiter">
                                <button type="submit">
                                    <span>שליחה</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import Breadcrumbs from "@/components/include/breadcrumbs.vue";

    export default {
        
        name: "About",
        components: {
            Breadcrumbs
        }
    };

</script>

<style lang="scss">

    .add-new-page{padding-bottom: 90px;
        .conteiner{ max-width: 920px; margin: 0 auto; }
        .title-page{ padding: 0px 0 30px;
            h1{font-size: 50px; font-family: "AlmoniTzarAAA"; color: rgb(42, 41, 41); line-height: 1.2; text-align: center;}
            .icon{ text-align: center; }
        }
        .texter{ padding: 25px 0; border-top: 1px solid #ebebeb;
            h2{ font-size: 21px; font-family: "AlmoniTzarAAA"; color: rgb(93, 54, 143); text-transform: uppercase; line-height: 1.1;  margin: 0 auto 10px; max-width: 770px; }
            p{font-size: 18px; font-family: "AlmoniDLAAA"; color: rgb(75, 75, 75); text-transform: uppercase; line-height: 1.278; margin: 0 auto 25px; max-width: 770px;}
            strong{ font-weight: 700; }
        }
        .formpart{
            .part{ margin-bottom: 5px; background-color: #f4f4f4; padding: 15px;  }
            .row{ max-width: 780px; margin: 0 auto; padding: 15px 0; }

            .title-row{
                h2{font-size: 21px; font-family: "AlmoniTzarAAA"; color: rgb(93, 54, 143); text-transform: uppercase; line-height: 1.1;}
            }
            .labled{ font-size: 16px; font-family: "AlmoniDLAAA"; color: rgb(42, 41, 41); font-weight: bold; text-transform: uppercase; line-height: 1.438; margin-bottom: 5px; }
            .inputer{ max-width: 176px; width: 100%; margin-left: 20px; display: inline-block;
                &:nth-child(4){ margin: 0; }     
                &.long{ max-width: 270px; }
                input{ width: 100%; height: 30px; border: none; background-color: #fff; padding: 0 10px; font-size: 14px; }          
                
                &.full{ max-width: 100%;
                    textarea{ width: 100%; height: 140px; border: none; background-color: #fff; padding: 10px; font-size: 14px; resize: none; }
                    &.big{
                        textarea{ height: 140px; }
                    }
                    &.small{
                        textarea{ height: 90px; }
                    }
                }
            }

            .file-list{ list-style: none; padding: 0; margin: 0 0 15px;;
                li{ padding: 5px 0; }
                .siders{ display: flex; align-items: center; justify-content: flex-start; position: relative;
                    input[type=file]{ width: 0; opacity: 0; height: 0; overflow: hidden; position: absolute; top: 0;  right: 0; }
                }
                .description{ max-width: 195px; margin-left: 10px;
                    
                    input{ width: 100%; padding: 0 15px; height: 30px; background-color: #fff; border-radius: 14px; overflow: hidden; font-size: 14px; border: none; }
                }
                .butt{ padding: 5px 20px; display: inline-block; text-decoration: none; border-width: 1px; border-color: rgb(93, 54, 143); border-style: solid; border-radius: 13px; transition: all 0.3s;
                    span{ font-size: 16px; font-family: "AlmoniDLAAA"; color: rgb(93, 54, 143); line-height: 1.15; font-weight: 900; transition: all 0.3s; }
                    &:hover{ background-color: #5d368f; 
                        span{ color: #fff; }
                    }
                }
            }
            .file-loader{ position: relative; display: block; max-width: 280px;
                input{ width: 0; opacity: 0; height: 0; overflow: hidden; position: absolute; top: 0;  right: 0; }
                label{ display: flex; align-items: center; justify-content: flex-start; cursor: pointer;
                    .icon{ max-width: 16px; width: 100%; }
                    .text-des{ font-family: "AlmoniDLAAA"; font-size: 16px; color: rgb(110, 110, 110); line-height: 1.438; }
                }
            }

            .checker{ display: inline-block; margin-left: 20px;
                label{ position: relative; overflow: hidden; cursor: pointer;
                    input{ width: 0; height: 0; overflow: hidden; position: absolute; top: 0; right: 0; }
                    .beutify{ width: 10px; height: 10px; display: inline-block; border: 1px solid #000; border-radius: 50%; position: relative; margin-left: 4px; 
                        &:before{ content: ''; position: absolute; width: 5px; height: 5px; border-radius: 50%; overflow: hidden; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #000; opacity: 0; transition: all 0.3s; }
                    }
                    input:checked ~ .beutify:before{ opacity: 1; }
                    .text-lbl{ font-size: 16px;  color: rgb(42, 41, 41); line-height: 1.2; font-weight: 700;  font-family: "AlmoniDLAAA" }
                }
            }

            .row.siders{ display: flex; align-items: center; justify-content: space-between; 
                .submiter{ max-width: 215px; width: 100%; 
                    button{display: block;  width: 100%; text-decoration: none; border: 3px solid #5d368f; border-radius: 25px; padding: 10px 35px; transition: all 0.3s; background-color: #5d368f;
                        span{ font-weight: 900; font-family: "AlmoniDLAAA"; font-size: 16px; color: rgb(255, 255, 255); text-transform: uppercase; transition: all 0.3s;}
                        &:hover{ background-color: transparent; border-color: #5d368f;
                            span{ color: #5d368f; }
                        }
                    }
                }
                .politic{
                    label{ position: relative; overflow: hidden; display: block; }
                    input{ width: 0; opacity: 0; height: 0; overflow: hidden; }
                    .text-lbl{ font-family: "AlmoniDLAAA"; font-size: 16px; color: rgb(110, 110, 110); line-height: 1.438; display: inline-block; vertical-align: middle;
                        a{ text-decoration: underline; color: rgb(110, 110, 110); }
                    }
                    .beutify{ width: 14px; height: 14px; display: inline-block; background-color: transparent; border: 2px solid #605f5f; vertical-align: middle; position: relative; transition: all 0.3s;
                        &:before{ content: ''; position: absolute; left: 0px; width: 12px; height: 6px; border-bottom: 2px solid #605f5f; border-left: 2px solid #605f5f; transform: rotate(-45deg);  opacity: 0; transition: all 0.3s; }
                    }
                    input:checked ~ .beutify{ border-color: transparent;
                        &:before{ opacity: 1; }
                    }
                }
            }
        }
    }

</style>

