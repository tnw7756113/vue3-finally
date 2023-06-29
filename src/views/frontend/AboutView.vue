<template>
  <section class="mt-6">
    <div class="banner d-flex flex-column justify-content-center align-items-center">
      <div class="text-center">
        <h1 class="banner-title mb-3">關於我們</h1>
        <span class="banner-text">菓然的誕生</span>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb my-3">
            <li class="breadcrumb-item"><router-link class="breadcrumb-text" to="/">首頁</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">關於我們</li>
          </ol>
        </nav>
      </div>
  </section>
  <section class="my-5">
    <div class="container d-flex">
      <div class="row g-1 w-100">
        <div data-aos="zoom-in" class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h2 class="p-2 text-brown fw-bold title-typeset-left bg-beige border-start border-5 border-brown mb-0">菓然的誕生</h2>
          <div class="p-3 p-lg-5 w-100 text-typeset-left bg-green-light text-beige fs-5 shadow">
            <p class="mb-0">一群對未來充滿熱情且喜愛製作和菓子的年輕人，於2023年創立了菓然。菓然的宗旨，在於掌握味道與外觀的黃金平衡，依循古法，並且配合時代喜好調整製程，將和菓子的美好告訴台灣。</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" class="col-12 col-md-6"  style="z-index: -1; position: relative;">
          <img class="img-fluid" src="@/assets/imgs/wagasi02.webp" alt="wagasi">
        </div>
      </div>
    </div>
  </section>
  <section class="my-5 my-md-7">
    <div class="container d-flex">
      <div class="row g-1 w-100 flex-row-reverse">
        <div data-aos="zoom-in" class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-end">
          <h2 class="p-2 text-brown fw-bold bg-beige title-typeset-right border-end border-5 border-brown text-end mb-0">依循古法 堅持品質</h2>
          <div class="p-3 p-lg-5 w-100 text-typeset-right bg-green-light text-beige fs-5 shadow">
            <p class="mb-0">菓然的內餡，完全不添加任何油脂成份，遵循日式內餡的傳統工法，精細製作熬煮；菓然的和菓子，以不含化學防腐的天然材料所製成，建議購買後，請盡快品嘗享用。</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" class="col-12 col-md-6" style="z-index: -1; position: relative;">
          <img class="img-fluid" src="@/assets/imgs/syokunin.webp" alt="syokunin">
        </div>
      </div>
    </div>
  </section>
  <section class="my-5 my-md-7">
    <div class="container d-flex">
      <div class="row g-1 w-100">
        <div data-aos="zoom-in" class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h2 class="p-2 text-brown fw-bold title-typeset-stuffing bg-beige border-start border-5 border-brown mb-0">現做的新鮮餡料</h2>
          <div class="p-3 p-lg-5 w-100 text-typeset-stuffing bg-green-light text-beige fs-5 shadow">
            <p class="mb-0">每天職人製作和菓子的餡料會依據豆子種類的不同來使用不同的製作方法，煮出香氣飽滿，美味又不膩口的豆餡。
                不失果實的原味，堅持製作出色、香、味俱全的和菓子。</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" class="col-12 col-md-6"  style="z-index: -1; position: relative;">
          <img class="img-fluid" src="@/assets/imgs/anko.webp" alt="anko">
        </div>
      </div>
    </div>
  </section>
  <section class="my-5 my-md-7">
    <div class="container d-flex">
      <div class="row g-1 w-100 flex-row-reverse">
        <div data-aos="zoom-in" class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-end">
          <h2 class="p-2 text-brown fw-bold bg-beige title-typeset-present border-end border-5 border-brown text-end mb-0">送禮的好選擇</h2>
          <div class="p-3 p-lg-5 w-100 text-typeset-present bg-green-light text-beige fs-5 shadow d-flex flex-column justify-content-center">
            <p class="mb-0">不管送禮還是自我享用都很棒喔，心動不如馬上行動！</p>
            <div class="d-flex justify-content-center">
              <router-link to="/productList" class="btn btn-dark mt-3">選購去 ~</router-link>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" class="col-12 col-md-6" style="z-index: -1; position: relative;">
          <img class="img-fluid" src="@/assets/imgs/ichigodaihuku02.webp" alt="ichigodaihuku">
        </div>
      </div>
    </div>
  </section>
</template>
