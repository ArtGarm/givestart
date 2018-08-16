<template>
    <div class="home">
        <First />
        <Catalog />
        <Steps />
        <Accordion />
    </div>
</template>

<script>
// @ is an alias to /src
import Catalog from "@/components/catalog/catalog.vue";
import First from "@/components/index/first.vue";
import Steps from "@/components/index/steps.vue";
import Accordion from "@/components/include/accordion.vue";

export default {
    name: "index",
    components: {
        First, 
        Catalog,
        Steps,
        Accordion
    }
};
</script>
