<template>
  <footer class="bg-dark text-green-light">
    <div class="container">
      <div class="row row-cols-md-3 py-4 justify-content-end">
        <div class="col-12 col-md-4 p-3 d-flex justify-content-center">
          <img class="logo" src="../assets/imgs/logo.png" alt="logo">
        </div>
        <div class="col-10 col-sm-8 col-md-4 p-3">
          <ol class="px-0" style="list-style-type: none;">
            <h2>聯絡方式</h2>
            <li class="py-2"><i class="bi bi-geo-alt-fill me-1"></i>果然市菓然路66號-1</li>
            <li class="py-2"><i class="bi bi-clock-fill me-1"></i>周一至周六 10：30 - 21：30</li>
            <li class="py-2">
              <i class="bi bi-envelope-fill me-1"></i>
              <a class="footer-link-text" href="mailto:example@gmail.com">example@gmail.com</a>
            </li>
            <li class="py-2">
              <i class="bi bi-telephone-fill me-1"></i>
              <a class="footer-link-text" href="tel:+886-7-7766123">07-7766123</a>
            </li>
          </ol>
        </div>
        <div class="col-10 col-sm-8 col-md-4 p-3">
          <ul class="px-0" style="list-style-type: none;">
            <h2>關於菓然</h2>
            <li class="py-1">
              <router-link to="/about" class="text-black">
                <button class="btn btn-arrow bi bi-arrow-right-circle p-0"> 關於我們</button>
              </router-link>
            </li>
            <li class="py-1">
              <router-link to="/productList" class="text-black">
                <button class="btn btn-arrow bi bi-arrow-right-circle p-0"> 產品列表</button>
              </router-link>
            </li>
            <li class="py-1">
              <router-link to="/faq" class="text-black">
                <button class="btn btn-arrow bi bi-arrow-right-circle p-0"> 常見問題</button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center py-3 fs-6">
      <p>本網站為個人練習使用，無商業用途</p>
      <p class="mb-0">© 2023 Gary Huang All rights reserved.</p>
    </div>
  </footer>
</template>
