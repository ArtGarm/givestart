<template>
    <div class="home">

        <First />
        <Steps />

    </div>
</template>

<script>
// @ is an alias to /src
import First from "@/components/index/first.vue";
import Steps from "@/components/index/steps.vue";


export default {
  name: "index",
  components: {
    First, 
    Steps
  }
};
</script>
