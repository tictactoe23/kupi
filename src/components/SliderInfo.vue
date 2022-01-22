<template>
  <div class="container">
    <div class="content">
      <div class="wrapper">
        <div class="block__items">
          <div class="block__item fist__block">
            <img
              name="passenger"
              src="../assets/img/passenger.svg"
              class="img"
            />
            <p class="title">Why choose<br />Kupibilet</p>
            <span class="description"
              >We guarantee every passenger a fair price, support from purchase
              to landing, and also a secure method to pay for their ticket</span
            >
          </div>
          <div class="block__item">
            <img name="passenger" src="../assets/img/support.svg" class="img" />
            <p class="title">24/7 personal Customer Care</p>
            <span class="description"
              >We assign you a personal manager who will handle any urgent
              questions regarding your air travel experience. No need to wait on
              the line – you will have your own personal specialist ready to
              help</span
            >
          </div>
          <div class="block__item">
            <img name="passenger" src="../assets/img/coin.svg" class="img" />
            <p class="title">Smart Routes</p>
            <span class="description"
              >We combine several airline route options into one ticket and
              provide you with free insurance in case of delays at your transfer
              location, ensuring you get to your destination without any
              additional expenses</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin-top: 90px;
}

.content {
  width: 100%;
  margin: 0 auto;
  max-width: 966px;
}

.wrapper {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
}

.block__items {
  display: flex;
  align-items: stretch;
  overflow-x: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-box-align: stretch;
}

.block__item {
  flex-shrink: 0;
  width: 291px;
  margin: 29px 0;
  padding: 20px;
}

.img {
  width: 80px;
  height: 80px;
  margin-bottom: 18px;
}

.title {
  font-size: 30px;
  line-height: 34px;
  letter-spacing: -0.6px;
  margin: 0;
  margin-bottom: 18px;
  font-weight: 700;
  white-space: pre-wrap;
}

.description {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}

@media screen and (min-width: 600px) and (max-width: 1199px) {
  .gvNce:not(:empty) {
    margin-top: 72px;
  }
}

@media screen and (min-width: 1000px) {
  .content {
    width: 100%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 1199px) {
  .block__items {
    flex-wrap: nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding: 6px 18px 12px;
  }
  .block__item {
    width: 228px;
    border-radius: 8px;
    padding: 18px;
    box-shadow: 0 2px 4px 0 rgb(98 112 139 / 60%);
    margin: 0;
    background-color: #ffffff;
    margin-left: 18px;
  }
  .fist__block {
    margin-left: 0;
  }
}
</style>
