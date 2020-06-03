<template>
  <section>
    <div class="errorImg">
        <img src="@/static/404.png" class="lazyload" alt="альтернативный текст">
    </div>
    <div class="titleBox">
      <h1 class="titleText">Уууупс, страница пропала, а сайт не смог ее найти — 404 ошибка</h1>
    </div>
    <div class="toHome">
      <div class="buttonToHome">
        <nuxt-link to="/">Вернутся на главную</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
      title: `Уууупс, страница пропала, а сайт не смог ее найти — 404 ошибка | ${process.env.appName}`
  },
}
</script>

<style lang="sass" scoped>

.errorImg
  display: flex
  align-self: center
  margin: 100px 35% 0 35%
  width: 30%
  justify-content: center
  img
    max-width: 100%;
    height: auto;

.titleBox
  width: 60%
  margin: 0 20%
  .titleText
    font-family: Lora, sans-serif
    font-size: 50px
    font-weight: 400
    line-height: 1.2
    margin: 0
    text-align: center
    color: white
    padding: 36px 0 36px 0
    margin-top: 0em
    margin-bottom: 0em

.toHome
    display: flex
    justify-content: center

.buttonToHome
    background-color: #1a30c5
    border-radius: 5px
    cursor: pointer
    color: #ffffff
    text-align: center
    padding: 15px 30px
    .buttonToHome:hover
    background-color: #1a30c5
    .buttonToHome:active
    background-color: #1a30c5
    a
      font-family: Lora, sans-serif
      font-size: 20px
      font-weight: 400
      margin: 0
      text-align: center
      text-decoration: none
      color: white
      padding: 40px 0
      margin-top: 0em
      margin-bottom: 0em

</style>
