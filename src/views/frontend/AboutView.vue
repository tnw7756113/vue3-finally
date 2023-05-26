<template>
<section class="mt-6">
  <div class="container d-flex justify-content-center">
    <img class="img-fluid" src="@/assets/imgs/banner02.webp" alt="banner">
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
<section>
  <div class="container my-6">
    <div class="row row-cols-1 gy-5">
      <div class="col">
        <div class="row gy-1 g-md-5 justify-content-center">
          <div data-aos="zoom-in" class="col-10 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 class="text-center title">菓然的誕生</h2>
            <p>一群對未來充滿熱情且喜愛製作和菓子的年輕人，於2023年創立了菓然。菓然的宗旨，在於掌握味道與外觀的黃金平衡，依循古法，並且配合時代喜好調整製程，將和菓子的美好告訴台灣。</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500" class="col-10 col-md-4 d-flex align-items-center">
            <img class="img-fluid " src="@/assets/imgs/wagasi02.webp" alt="wagasi">
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row gy-1 g-md-5 justify-content-center flex-row-reverse">
          <div data-aos="zoom-in" class="col-10 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 class="text-center title">依循古法 堅持品質</h2>
            <p>菓然的內餡，完全不添加任何油脂成份，遵循日式內餡的傳統工法，精細製作熬煮；菓然的和菓子，以不含化學防腐的天然材料所製成，建議購買後，請盡快品嘗享用。</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500" class="col-10 col-md-4 d-flex align-items-center">
            <img class="img-fluid" src="@/assets/imgs/syokunin.webp" alt="syokunin">
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row gy-1 g-md-5 justify-content-center">
          <div data-aos="zoom-in" class="col-10 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 class="text-center title">現做的新鮮餡料</h2>
            <p>每天職人製作和菓子所使用的原料有許多不同的種類，依據豆子種類的不同來使用不同的製作方法，煮出香氣飽滿，美味又不膩口的豆餡。
              為不失果實的原味，使用的豆餡也經過精心選製（紅豆、白小豆、菜豆、豌豆等），堅持製作出色、香、味俱全的和菓子。</p>
            <p></p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500" class="col-10 col-md-4 d-flex align-items-center">
            <img class="img-fluid" src="@/assets/imgs/anko.webp" alt="anko">
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row gy-3 g-md-5 justify-content-center flex-row-reverse">
          <div data-aos="zoom-in" class="col-10 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 class="text-center title">現在就來去訂購吧！</h2>
            <router-link to="/productList" class="btn btn-outline-green mt-3">選購去 ~</router-link>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500" class="col-10 col-md-4 d-flex align-items-center">
            <img class="img-fluid" src="@/assets/imgs/ichigodaihuku02.webp" alt="ichigodaihuku">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
</script>
