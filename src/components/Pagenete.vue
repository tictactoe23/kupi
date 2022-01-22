<template>
  <div class="container">
    <div class="content">
      <div class="main">
        <div class="conteiner_text first">
          <img src="../assets/img/icons8-okey.png" /> Trip Summary
        </div>
        <span class="container_line first"><div class="line"></div></span>
        <div class="conteiner_text">Review&Pay</div>
        <span class="container_line"><div class="line"></div></span>
        <div class="conteiner_text">Confirmation</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  border-bottom: 1px solid #dde3eb;
  background-color: #ffffff;
  margin-bottom: 24px;
}
.content {
  width: 1176px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 42px;
}
.main {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.conteiner_text {
  color: #007acc;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  display: inline-flex;
  align-items: center;
  pointer-events: none;
}
.container_line {
  display: inline-flex;
  align-items: center;
  padding: 0 16px;
  text-align: center;
  margin-top: 2px;
}
.line {
  width: 24px;
  height: 2px;
  border-radius: 1px;
  background-color: #007acc;
}
.conteiner_text > img {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
@media screen and (max-width: 1199px) {
  .content {
    flex-direction: row;
    justify-content: center;
    padding: 0 18px;
    width: auto;
    margin: 0;
  }
}

@media screen and (max-width: 436px) {
  .first {
    display: none;
  }
}
</style>
