<template>
  <div class="content">
    <div class="content__top">
      <div class="logo">
        <img src="../assets/img/open-hands.svg" alt="" />
      </div>
      <h1 class="title__top">Cheap flights online</h1>
    </div>
    <input-search />
  </div>
</template>

<script>
import InputSearch from "@/components/InputSearch.vue";
export default {
  components: {
    InputSearch,
  },
};
</script>

<style scoped>
.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.content__top {
  padding-top: 30px;
}

.title__top {
  font-size: 44px;
  line-height: 28px;
  text-align: center;
  margin: 0 auto;
  letter-spacing: -1.2px;
  padding: 7px 0;
}

.logo > img {
  background-size: cover;
  content: "";
  display: block;
  width: 150px;
  height: 150px;
  margin: 0 auto 0;
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

@media screen and (max-width: 599px) {
  .title__top {
    display: none;
  }
  .logo > img {
    height: 100px;
    width: 100px;
  }
  .content__top {
    padding-top: 0;
  }
  .content {
    margin-top: 0;
  }
}
</style>
