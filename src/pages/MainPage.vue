<template>
  <header-vue />
  <search-ticket />
  <slider-info />
  <mobil-app />
  <footer-vue />
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import FooterVue from "@/components/Footer.vue";
import SearchTicket from "@/components/SearchTicket.vue";
import SliderInfo from "@/components/SliderInfo.vue";
import MobilApp from "@/components/MobilApp.vue";

export default {
  components: {
    HeaderVue,
    FooterVue,
    SearchTicket,
    SliderInfo,
    MobilApp,
  },
};
</script>
