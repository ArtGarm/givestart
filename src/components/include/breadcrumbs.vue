<template>
    
    <div class="breadcrumbs">
        <ul>
            <li>
                <router-link to="/">ראשי</router-link>
            </li>
            <li>
                <span>  חינוך  </span>
            </li>
        </ul>
    </div>


</template>

<script>

export default {
    name: "breadcrumbs",
    props: [ ],
    data() {
        return {
            show: false
        };
    }

};
</script>

<style lang="scss">
      
    .breadcrumbs{ padding: 30px 0 10px;
        ul{ list-style: none; padding: 0; margin: 0; text-align: center;
            li{ display: inline-block; 
                &:after{content: '>'; font-size: 14px; font-family: "AlmoniDLAAA"; color: rgb(122, 122, 122); text-transform: uppercase; line-height: 1.647; }
                &:last-child:after{ display: none; }
            }
        }
        a{ font-size: 14px; font-family: "AlmoniDLAAA"; color: rgb(122, 122, 122); text-decoration: underline; text-transform: uppercase; line-height: 1.647; transition: all 0.3s;
            &:hover{ color: #5d368f; }
        }
        span{font-size: 14px; font-family: "AlmoniDLAAA"; color: rgb(122, 122, 122); text-transform: uppercase; line-height: 1.647;}
    }

</style>
