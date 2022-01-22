<template>
  <div class="container">
    <div class="content">
      <div class="content__data">
        <div class="container__airline">
          <div class="content__airline">
            <div class="first__airline">
              <span class="airline"><slot name="airline_1"></slot></span>
            </div>
            <div class="last__airline">
              <span class="airline"><slot name="airline_2"></slot></span>
            </div>
          </div>
        </div>
        <div class="data__none"></div>
        <div class="date__arrival">
          <div class="container__arrival">
            <div class="arrival__time"><slot name="depart_time"></slot></div>
            <div class="arrival__line">
              <div class="container__line">
                <div class="time__fly_line">2h 23min</div>
                <div class="content__line">
                  <div class="line__first">
                    <slot name="line_1"></slot>
                  </div>
                  <div class="line__last">
                    <slot name="line_3"></slot>
                  </div>
                </div>
              </div>
            </div>
            <div class="arrival__time"><slot name="arrival_time"></slot></div>
            <div class="wrapper__info_fist">
              <div class="text__info"><slot name="depart_city"></slot></div>
            </div>
            <div class="wrapper__info">
              <div class="text__info"><slot name="arrival_city"></slot></div>
            </div>
          </div>
        </div>
        <div class="container__time">
          <div class="time__fly"><slot name="fly_time"></slot></div>
          <div class="stop__fly">IO-675, Airbus</div>
        </div>
      </div>
      <div class="content__sales">
        <div class="container__submit">
          <slot name="button"></slot>
        </div>
        <div class="container__options">
          <span class="get__options">Flight details</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.time__fly_line {
  display: none;
  text-align: center;
  margin-bottom: -10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.2px;
}
.text__info {
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 16px;
  color: #808080;
  padding-top: 5px;
}
.wrapper__info {
  grid-column: 4 / 4;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.wrapper__info_fist {
  grid-column: 1 / span 3;
  padding-right: 12px;
  display: inline-grid;
}
.stop__fly {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 16px;
  color: #808080;
}
.time__fly {
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: #333333;
}
.line__text {
  font-size: 13px;
  text-align: center;
  letter-spacing: 1px;
  color: #808080;
  margin-bottom: 5px;
}
.line_3 {
  height: 3px;
  background-color: #2c4679;
  border-radius: 1.5px;
}
.line_2 {
  height: 1px;
  background: #cad3de;
}
.line_1 {
  height: 3px;
  background-color: #2c4679;
  border-radius: 1.5px;
}
.line__last {
  position: relative;
  flex-grow: 297;
  min-width: 16px;
  padding: 5px 0;
}
.line__middle {
  position: relative;
  flex-grow: 428;
  min-width: 16px;
  padding: 5px 0;
}
.line__first {
  position: relative;
  flex-grow: 273;
  min-width: 16px;
  padding: 5px 0;
}
.content__line {
  display: flex;
  align-items: flex-end;
  height: 100%;
}
.container__line {
  display: flex;
  flex-direction: column;
  padding: 2px 4px 0;
  height: 100%;
  margin-top: 8px;
}
.arrival__line {
  grid-column: 2 / span 2;
}
.arrival__time {
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  color: #333333;
  margin-bottom: -5px;
  margin-top: 4px;
}
.container__arrival {
  display: grid;
  grid-template-columns: 54px 1fr 1fr 154px;
}
.airline {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 14px;
  color: #808080;
}
.content__airline {
  align-items: center;
  margin-bottom: 19px;
  display: flex;
}
.container__airline {
  display: flex;
  -webkit-box-align: start;
}
.container {
  background: #ffffff;
  border: 1px solid #cad3de;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 10%);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
  transition: 0.15s ease-out;
}
.content {
  display: flex;
  width: 100%;
  background: #ffffff;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -ms-flex-align: flex-start;
  align-items: flex-start;
}
.content__data {
  display: grid;
  grid-column-gap: 24px;
  grid-template-columns: 1fr 180px;
  width: 70%;
  padding: 24px 24px 22px;
}
.content__sales {
  display: flex;
  padding: 24px 24px 20px 29px;
  width: 30%;
  border-left: 1px solid #cad3de;
  align-self: stretch;
  cursor: default;
  flex-direction: column;
}
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
}
.container__wrapper {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}
.get__options {
  padding-top: 35px;
  transition: 0.15s ease-out;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #007acc;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-transition-property: color;
  transition-property: color;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  opacity: 0.5;
}
@media screen and (min-width: 600px) and (max-width: 1199px) {
  .container {
    margin: 8px;
  }
}
@media screen and (max-width: 1199px) {
  .content {
    flex-direction: column;
  }
  .content__data {
    width: 100%;
    border-bottom: 1px solid #cad3de;
    padding: 16px 16px 22px;
  }
  .content__sales {
    align-items: center;
    -webkit-box-pack: justify;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12px 16px 12px;
    width: 100%;
    border: none;
    flex-direction: initial;
  }
  .get__options {
    padding-top: 0;
  }
  .container__submit {
    order: 3;
  }
  .container__options {
    order: 2;
  }
}
@media screen and (max-width: 599px) {
  .container__arrival {
    grid-template-columns: 54px 1fr 1fr 54px;
  }
  .content__data {
    grid-template-columns: 1fr 117px;
    padding-bottom: 10px;
  }
  .first__airline,
  .last__airline {
    flex-direction: column-reverse;
  }
  .last__airline {
    margin-top: 0;
    text-align: right;
  }
  .data__none {
    margin-top: 0;
    text-align: right;
    width: 0;
  }
}
@media screen and (max-width: 400px) {
  .content__data {
    display: flex;
    flex-direction: column;
  }
  .data__none {
    display: none;
  }
  .container__time {
    display: none;
  }
  .content__airline {
    grid-template-columns: 54px 1fr 1fr 54px;
  }
  .time__fly_line {
    display: block;
  }
}
</style>
