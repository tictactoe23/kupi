<template>
  <header class="header">
    <div class="container">
      <div class="content">
        <div class="logo"></div>
        <a title="Kupi.сom" class="link dispaly" href="/">Flights</a>
        <a
          href="https://www.booking.com/"
          target="_blank"
          title="Hotels.Kupi.сom"
          rel="nofollow"
          class="link dispaly"
          >Hotels</a
        >
      </div>
      <div class="content dispaly__content">
        <span href="" class="lang">
          <img src="../assets/img/en.svg" class="img_lang" />
          EN, $
        </span>
        <a href="/" target="_blank" rel="nofollow" class="link">Help</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background: #ffffff;
  position: relative;
  z-index: 5;
  border-bottom: 1px solid #dde3eb;
}

.container {
  height: 48px;
  margin: 0 auto;
  max-width: 1178px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content {
  display: flex;
  justify-content: center;
}

.logo {
  height: 24px;
  background: url("../assets/img/kupicom.svg");
  background-repeat: no-repeat;
  display: block;
  width: 132px;
}

.lang {
  transition: 0.15s ease-out;
  display: inline-flex;
  align-items: center;
  color: #007acc;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  transition-property: color;
  opacity: 0.5;
}

.img_lang {
  margin-right: 5px;
}

.link {
  transition: 0.15s ease-out;
  display: inline-flex;
  align-items: center;
  color: #007acc;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  transition-property: color;
  margin-left: 18px;
}

.dispaly {
  display: block;
}

.dispaly__content {
  display: block;
}

@media (max-width: 1200px) {
  .dispaly {
    display: none;
  }
}

@media (max-width: 280px) {
  .dispaly__content {
    display: none;
  }
}
</style>
