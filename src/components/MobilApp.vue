<template>
  <div class="container">
    <div class="block">
      <h3 class="title">It's even easier with our app</h3>
      <div class="item">
        <div class="item__block">
          <div class="item__title">View orders offline</div>
          All information about your flight is available, even if there is no
          Internet
        </div>
      </div>
      <div class="item">
        <div class="item__block">
          <div class="item__title">Pay securely</div>
          Details of your VISA, MasterCard and Maestro cards are protected by a
          secret SSL protocol
        </div>
      </div>
      <div class="item">
        <div class="item__block">
          <div class="item__title">Stay up to date</div>
          We notify you when it's time to go to the airport and keep you abreast
          of your flight status
        </div>
      </div>
      <div class="qr__item">
        <div class="qr__title">QR code with a link to the app:</div>
        <img
          src="//www.kupibilet.ru/cdn/statics/media/qrCode@1x.62392d.png"
          srcset="//www.kupibilet.ru/cdn/statics/media/qrCode@2x.a06674.png 2x"
          alt="QRCode for apps"
          class="qr"
        />
      </div>
    </div>
    <div class="img__block">
      <div class="img__item"><div class="img"></div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background: #ffffff;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 76px 0 90px 0;
}

.title {
  font-size: 30px;
  line-height: 34px;
  letter-spacing: -0.6px;
  margin: 0;
  max-width: 380px;
  margin-top: 20px;
  margin-bottom: 32px;
  font-weight: bold;
}

.img__block {
  min-height: 300px;
}

.img__item {
  padding: 30px;
}

.block {
  display: flex;
  flex-direction: column;
  min-width: 420px;
  margin-right: 80px;
}

.img {
  background-image: url("../assets/img/phone_en.png");
  width: 300px;
  max-width: 100%;
  height: 617px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}

.item {
  display: flex;
  margin-bottom: 30px;
  width: 365px;
}

.item__block {
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.item__title {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 0;
  margin-bottom: 6px;
}

.qr__title {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 0;
  font-weight: 600;
  margin-bottom: 10px;
}

.qr {
  border-radius: 22px;
  width: 148px;
  height: 148px;
  padding: 16px;
  box-shadow: 0 7px 38px rgb(150 160 179 / 30%);
  background-color: #ffffff;
}

.qr__item {
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

@media screen and (max-width: 1199px) {
  .container {
    display: none;
  }
}
</style>
