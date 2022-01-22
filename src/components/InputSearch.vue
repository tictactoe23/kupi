<template>
  <div class="content__main">
    <div class="wrapper">
      <div class="block block__path">
        <div class="input__path">
          <input
            type="text"
            class="input__search from"
            :class="{ error: from.error }"
            :placeholder="from.placeholder"
            v-model="from.value"
            @click="
              from.show = true;
              to.show = false;
              from.error = false;
              from.placeholder = 'From';
            "
          />
          <div
            class="dropdown_block"
            v-if="from.show && from.search.length > 0"
          >
            <ul>
              <li
                v-for="item in from.search"
                :key="item.code"
                @click="select_from(item.city, item.code)"
              >
                <div class="row__search">
                  <div class="row__data">
                    <div class="row__title">{{ item.city }}</div>
                    <div class="row__description">{{ item.country }}</div>
                  </div>
                  <div class="row__code">{{ item.code }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="input__path">
          <input
            type="text"
            class="input__search to"
            :class="{ error: to.error }"
            :placeholder="to.placeholder"
            v-model="to.value"
            @click="
              to.show = true;
              from.show = false;
              to.error = false;
              to.placeholder = 'To';
            "
          />
          <div class="dropdown_block" v-if="to.show && to.search.length > 0">
            <ul>
              <li
                v-for="item in to.search"
                :key="item.code"
                @click="select_to(item.city, item.code)"
              >
                <div class="row__search">
                  <div class="row__data">
                    <div class="row__title">{{ item.city }}</div>
                    <div class="row__description">{{ item.country }}</div>
                  </div>
                  <div class="row__code">{{ item.code }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="block block__search">
        <div class="block block__date">
          <div class="input__date">
            <input
              type="text"
              id="dateDepart"
              class="input__search depart"
              :placeholder="depart.placeholder"
              :class="{ error: depart.error }"
            />
          </div>
          <div class="input__date">
            <input
              type="text"
              id="dateReturn"
              class="input__search return"
              placeholder="Return"
            />
          </div>
        </div>
        <div class="block block__options">
          <div class="input__wrapper">
            <div class="">
              <div
                class="block input__search input__options"
                @click="option_show = !option_show"
              >
                <b>{{ options.adults }} traveller</b>, ec..
              </div>
              <div class="droped__options" v-if="option_show">
                <div class="droped__content">
                  <div class="droped__row">
                    <div class="title__row">
                      <div class="row__text">
                        Adults
                        <div class="row__discript">12 and older</div>
                      </div>
                    </div>
                    <div class="options__row">
                      <span class="conut_row">{{ options.adults }}</span>
                      <div class="count__button">
                        <img
                          src="../assets/img/minus.svg"
                          class="option_plus"
                          :class="{ minus: options.adults < 2 }"
                          @click="minusAdults()"
                        />
                        <img
                          src="../assets/img/plus.svg"
                          class="option_plus"
                          @click="plus('adults')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="droped__row">
                    <div class="title__row">
                      <div class="row__text">
                        Children
                        <div class="row__discript">age 2 through 12</div>
                      </div>
                    </div>
                    <div class="options__row">
                      <span class="conut_row">{{ options.children }}</span>
                      <div class="count__button">
                        <img
                          src="../assets/img/minus.svg"
                          class="option_plus"
                          :class="{ minus: options.children < 1 }"
                          @click="minus('children')"
                        />
                        <img
                          src="../assets/img/plus.svg"
                          class="option_plus"
                          @click="plus('children')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="droped__row">
                    <div class="title__row">
                      <div class="row__text">
                        Infants
                        <div class="row__discript">younger than 2, no seat</div>
                      </div>
                    </div>
                    <div class="options__row">
                      <span class="conut_row">{{ options.infants }}</span>
                      <div class="count__button">
                        <img
                          src="../assets/img/minus.svg"
                          class="option_plus"
                          @click="minus('infants')"
                          :class="{ minus: options.infants < 1 }"
                        />
                        <img
                          src="../assets/img/plus.svg"
                          class="option_plus"
                          @click="plus('infants')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="droped__row">
                    <label class="select_class"
                      ><span class=""
                        ><input
                          type="checkbox"
                          name=""
                          v-model="business"
                          class="checkbox" /></span
                      ><span class="checkbox_text">Business class</span></label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button type="button" @click="search()" class="search__button">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import "air-datepicker/air-datepicker.css";
import localeEn from "air-datepicker/locale/en";

import { getCountry } from "@/plugins/requests.js";

export default {
  data() {
    return {
      from: {
        search: [],
        show: false,
        code: "",
        value: "",
        placeholder: "From",
        error: false,
      },
      to: {
        search: [],
        show: false,
        code: "",
        value: "",
        placeholder: "To",
        error: false,
      },
      depart: {
        placeholder: "Depart",
        error: false,
      },
      business: false,
      option_show: false,
      options: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    };
  },
  methods: {
    minus(e) {
      if (this.options[e] > 0) return this.options[e]--;
    },
    minusAdults() {
      if (this.options.adults > 1) return this.options.adults--;
    },
    plus(e) {
      if (
        this.options.adults + this.options.children + this.options.infants <
        9
      )
        this.options[e]++;
    },
    select_from(city, code) {
      this.from.show = false;
      this.from.value = city;
      this.from.code = code;
    },
    select_to(city, code) {
      this.to.show = false;
      this.to.value = city;
      this.to.code = code;
    },
    async search() {
      if (this.from.code.length > 1) {
        if (this.to.code.length > 1) {
          const depart = document.getElementById("dateDepart").value;
          if (depart.length > 1) {
            await this.$router.push({
              name: "Tickets",
              params: {
                departure: this.from.code,
                arrival: this.to.code,
                time: depart,
                adult: this.options.adults,
                child: this.options.children,
                infant: this.options.infants,
                business: this.business,
                city_departure: this.from.value,
                city_arrival: this.to.value,
              },
            });
            if (this.$router.currentRoute._rawValue.name === "Tickets")
              location.reload();
          } else {
            this.depart.error = true;
            this.depart.placeholder = "Select date";
          }
        } else {
          this.to.value = "";
          this.to.error = true;
          this.to.placeholder = "Select arrival airport";
        }
      } else {
        this.from.value = "";
        this.from.error = true;
        this.from.placeholder = "Select departure airport";
      }
    },
  },
  watch: {
    "from.value": async function (value) {
      this.from.search = await getCountry(value);
    },
    "to.value": async function (value) {
      this.to.search = await getCountry(value);
    },
  },
  mounted() {
    new AirDatepicker("#dateDepart", {
      minDate: new Date(),
      isMobile: true,
      autoClose: true,
      dateFormat: "yyyy-MM-dd",
      locale: localeEn,
    });
    new AirDatepicker("#dateReturn", {
      minDate: new Date(),
      isMobile: true,
      autoClose: true,
      dateFormat: "yyyy-MM-dd",
      locale: localeEn,
    });
  },
};
</script>

<style scoped>
.checkbox_text {
  transition: 0.15s ease-out;
  transition-property: color;
  margin-left: 6px;
}
.checkbox {
  display: inline-block;
  flex-shrink: 0;
  height: 18px;
  width: 18px;
  line-height: 16px;
  box-shadow: inset 0 0 0 1px #dde3eb;
  transition: 0.15s ease-out;
  transition-property: background, border;
  background: #ffffff;
  border-radius: 6px;
}
.select_class {
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  line-height: 18px;
  position: relative;
  user-select: none;
  width: 100%;
}
.row__discript {
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #808080;
  max-width: 100px;
}
.minus {
  opacity: 0.5;
}
.option_plus {
  width: 32px;
  height: 32px;
  margin-right: 6px;
  border-radius: 6px;
  cursor: pointer;
}
.row__text {
  text-align: left;
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 2px;
  color: #333333;
}
.options__row {
  display: flex;
}
.conut_row {
  margin-right: 6px;
  font-size: 24px;
  line-height: 28px;
  color: #333333;
}
.droped__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 216px;
  margin-bottom: 15px;
}
.droped__content {
  padding: 18px 12px 0px 12px;
}
.droped__options {
  position: absolute;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0px 8px 15px rgb(98 112 139 / 15%);
  z-index: 1;
}
.row__title {
  font-size: 18px;
  font-weight: 600;
}
.row__search {
  display: flex;
  padding: 5px;
}

.input__path {
  display: inline-block;
  width: 150px;
  position: relative;
  color: #fff;
}

.input__path .dropdown_block {
  display: block;
  width: 100%;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
}

.input__path ul {
  display: block;
  margin: 3px 0 0;
  padding: 3px 0;
  position: absolute;
  top: 100%;
  width: 100%;
  box-shadow: 0px 8px 15px rgb(98 112 139 / 15%);
  border-radius: 4px;
  max-height: 270px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  background: #ffffff;
}

.input__path li {
  cursor: pointer;
  display: lock;
  color: #000;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.row__data {
  width: 100%;
  margin-left: 10px;
  text-align: left;
}

.row__description {
  font-weight: 500;
  color: #96a0b3;
}

.row__code {
  margin: auto 0;
  padding-right: 10px;
  color: #96a0b3;
}

.content__main {
  width: 100%;
  margin-top: 48px;
  margin-bottom: 12px;
}

.wrapper {
  display: flex;
  max-width: 1178px;
  margin: 0 auto;
}

.block {
  display: flex;
}

.input__path {
  width: 314px;
}

.input__search {
  font-size: 18px;
  line-height: 30px;
  font-weight: normal;
  white-space: nowrap;
  height: 48px;
  padding: 8px 15px 9px;
  width: 100%;
  border: 1px solid #b1bdcc;
  background-color: #ffffff;
  font-family: inherit;
  outline: none;
}

.input__search:hover {
  border-color: #0f99f5;
}

.from {
  border-radius: 8px 0 0 8px;
}

.input__date {
  width: 141px;
}

.input__options {
  width: 148px;
}

.search__button {
  border-radius: 0 8px 8px 0;
  font-weight: bold;
  font-size: 18px;
  min-width: 120px;
  background-color: #ff7d03;
  border: none;
  outline: none;
  display: inline-block;
  color: #ffffff;
  line-height: 20px;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  height: 48px;
}

.error {
  border-color: #e64926;
}

.error::-webkit-input-placeholder {
  color: #e64926;
}

@media screen and (max-width: 1199px) {
  .content {
    margin: 36px 18px 42px;
  }
  .wrapper {
    flex-direction: column;
  }
  .block__date,
  .input__date,
  .input__path {
    width: 100%;
  }
  .to {
    border-radius: 0 8px 8px 0;
  }
  .input__options {
    margin-left: 4px;
    width: 100%;
  }
  .return {
    border-radius: 0 8px 8px 0;
  }
  .depart {
    border-radius: 8px 0 0 8px;
  }
  .input__wrapper {
    width: 100%;
  }
  .title__top {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.4px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1199px) {
  .block {
    margin-bottom: 16px;
    margin-right: 4px;
  }
  .input__options {
    border-radius: 8px;
    margin-right: 6px;
    flex: 1 0 calc(50% - 8px);
  }
  .input__wrapper {
    margin-right: 8px;
  }
  .search__button {
    border-radius: 8px;
  }
}

@media screen and (max-width: 599px) {
  .droped__options {
    width: 93%;
  }
  .block__options,
  .block__search,
  .block__path {
    flex-direction: column;
    margin-bottom: 6px;
  }
  .from {
    border-radius: 8px 8px 0 0;
  }
  .to {
    border-radius: 0 0 8px 8px;
  }
  .search__button {
    height: 56px;
    width: 100%;
    max-width: none;
    border-radius: 8px;
  }
  .input__options {
    margin-left: 0;
    margin: 6px 0;
    border-radius: 8px;
  }
  .content {
    margin-top: 0;
  }
  .content__main {
    margin-top: 38px;
  }
}

@media screen and (max-width: 424px) {
  .block__date {
    display: flex;
  }
  .depart {
    border-radius: 8px 8px 0 0;
  }
  .return {
    border-radius: 0 0 8px 8px;
  }
}
</style>
