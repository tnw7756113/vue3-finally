<template>
  <section class="mt-6">
    <div class="banner d-flex flex-column justify-content-center align-items-center">
      <div class="text-center">
        <h1 class="banner-title mb-3">常見問題</h1>
        <span class="banner-text">購買時有任何問題嗎？</span>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb my-3">
            <li class="breadcrumb-item"><router-link class="breadcrumb-text" to="/">首頁</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">常見問題</li>
          </ol>
        </nav>
      </div>
  </section>
  <section>
    <div class="container py-5 p-md-5">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              物流相關
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <h2 class="fs-5 fw-bold">Q：配送方式有哪些？</h2>
              <p>A：貓咪低溫宅配(冷凍)。</p>
              <h2 class="fs-5 fw-bold">Q：訂購商品後需要多少的時間才能收到商品？</h2>
              <p>A：宅配約1~3天。</p>
              <p class="mb-0">實際出貨時間仍依訂單量調節，可能提前或延後出貨。</p>
              <span>*完成下單後，請留意取件/送件通知簡訊及E-mail。</span>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              商品相關
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <h2 class="fs-5 fw-bold">Q：和菓子可以保存多久？</h2>
              <p>A：商品皆無添加防腐劑，需冷藏並在3~5天內食用；若無法冷藏，建議保存於室內陰涼處，並於第2天食用完畢</p>
              <h2 class="fs-5 fw-bold">Q：素食者可以食用嗎？</h2>
              <p>A：可以，店內商品都是素食。</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              訂單相關
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <h2 class="fs-5 fw-bold">Q：有提供那些付款方式？</h2>
              <p>A：目前只有貨到付款。</p>
              <h2 class="fs-5 fw-bold">Q：如何更改訂購內容、送貨地址或取消訂單？</h2>
              <p>A：若想要更改或取消訂單，請盡速聯繫客服，我們都會在工作時間盡速為你服務！</p>
              <span>訂單或商品不良相關客服 07-7766123 ( 週一～五 10:30-17:00) </span>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              退換貨相關
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <h2 class="fs-5 fw-bold">Q：若是想要退換貨，怎麼辦呢？</h2>
              <p>A：若您發現任何異常，如商品瑕疵不良、漏寄等等，請務必於第一時間聯絡客服，我們將儘快為您處理後續退換貨事宜。</p>
              <span>訂單或商品不良相關客服 07-7766123 ( 週一～五 10:30-17:00) </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
