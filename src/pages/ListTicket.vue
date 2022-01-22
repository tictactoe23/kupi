<template>
  <header-vue />

  <div class="container__search">
    <div class="content__search">
      <input-search />
    </div>
  </div>
  <div class="container__list_ticket" v-if="tickets.length > 0">
    <div class="content__list_ticket">
      <div class="list__tickets">
        <ticket-vue v-for="(ticket, index) in tickets" :key="index">
          <template v-slot:airline_1>{{ ticket.airline }}</template>
          <template v-slot:airline_2></template>
          <template v-slot:depart_time>{{
            ticket.departureTime.split(" ")[1]
          }}</template>
          <template v-slot:arrival_time>{{
            ticket.arrivalTime.split(" ")[1]
          }}</template>
          <template v-slot:depart_city
            >{{ ticket.departureTime.split(" ")[0] }},
            {{ ticket.departureAirport }}</template
          >
          <template v-slot:arrival_city
            >{{ ticket.arrivalTime.split(" ")[0] }},
            {{ ticket.arrivalAirport }}</template
          >
          <template v-slot:fly_time>{{ ticket.flightTime }}</template>
          <template v-slot:button
            ><button
              type="button"
              class="btn"
              @click="
                this.$router.push({
                  name: 'Payment',
                  params: {
                    depar: this.$route.params.city_departure,
                    return: this.$route.params.city_arrival,
                    price: ticket.price,
                  },
                })
              "
            >
              Buy for ${{ ticket.price }}
            </button></template
          >
          <template v-slot:line_1
            ><div
              class="line"
              :style="{
                'background-color': color[Math.floor(Math.random() * 6)],
              }"
            ></div
          ></template>
          <template v-slot:line_3
            ><div
              class="line"
              :style="{
                'background-color': color[Math.floor(Math.random() * 6)],
              }"
            ></div
          ></template>
        </ticket-vue>
      </div>
    </div>
  </div>
  <div class="wait__container" v-else>
    <div class="logo"></div>
    <div class="wait_direction">
      {{ this.$route.params.city_departure }} -
      {{ this.$route.params.city_arrival }}
    </div>
    <div class="wait__content"><div class="wait__tickets"></div></div>
  </div>
  <footer-vue />
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import FooterVue from "@/components/Footer.vue";
import InputSearch from "@/components/InputSearch.vue";
import TicketVue from "@/components/Ticket.vue";
import { getTicket } from "@/plugins/requests.js";

export default {
  components: {
    HeaderVue,
    InputSearch,
    TicketVue,
    FooterVue,
  },
  data() {
    return {
      tickets: [],
      color: ["#ffb40c", "#2aabe8", "#203484", "#ce2633", "#b3d643", "#5c1b69"],
    };
  },
  async mounted() {
    this.tickets = await getTicket(
      this.$route.params.departure,
      this.$route.params.arrival,
      this.$route.params.time,
      Number(this.$route.params.adult),
      Number(this.$route.params.child),
      Number(this.$route.params.infant),
      (this.$route.params.business = this.$route.params.business === "true")
    );
    if (this.tickets === false) {
      await this.$router.push({
        name: "Home",
      });
      location.reload();
    }
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
  background-color: #ff7d03;
  font-weight: 700;
  letter-spacing: -0.2px;
  padding: 9px 10px;
  font-family: inherit;
  border: none;
  outline: none;
  margin: 0;
  display: inline-block;
  color: #ffffff;
  font-size: 20px;
  line-height: 20px;
  transform: translateZ(0);
  border-radius: 8px;
  cursor: pointer;
}
.wait_direction {
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.2px;
  font-weight: 600;
}
.logo {
  width: 132px;
  height: 24px;
  min-height: 24px;
  background: url("../assets/img/kupicom.svg") no-repeat center;
  background-size: contain;
  margin-top: 30px;
}
@keyframes wait {
  0% {
    top: 0;
  }
  100% {
    top: 30px;
  }
}
.wait__content {
  flex-grow: 2;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.wait__container {
  position: fixed;
  top: 0px;
  left: 0px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background: #ffffff;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 18px 30px;
  text-align: center;
}
.wait__tickets {
  position: relative;
  min-height: 150px;
  flex-basis: 260px;
  width: 100%;
  min-width: 280px;
  background: url(//www.kupibilet.ru/cdn/statics/media/yoga.e10209.svg)
    no-repeat center;
  background-size: contain;
  animation-name: wait;
  animation-duration: 2s;
  animation-iteration-count: 50;
  animation-direction: alternate;
}
.line {
  height: 3px;
  border-radius: 1.5px;
}
.container__list_ticket {
  padding-top: 24px;
  width: 900px;
  margin: 0 auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
}

.content__list_ticket {
  width: 100%;
  flex-grow: 1;
  flex-grow: 1;
}

.list__tickets {
  outline: none;
  -webkit-transition: opacity 0.15s ease-out;
  transition: opacity 0.15s ease-out;
  opacity: 1;
}

.container__search {
  background-color: #ffffff;
  width: 100%;
  padding: 1px 0;
}

.content__search {
  margin: 0 18px;
}
@media screen and (max-width: 1199px) {
  .container__list_ticket {
    max-width: 882px;
    margin-left: auto;
    margin-right: auto;
  }
  .container__list_ticket {
    width: auto;
  }
}
@media screen and (min-width: 600px) and (max-width: 1199px) {
  .list__tickets {
    margin: 0 auto;
  }
}

@media screen and (max-width: 600px) {
  .container__list_ticket {
    margin: 0 10px;
  }
}
</style>
