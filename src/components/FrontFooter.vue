<template>
  <footer class="border-top border-5 border-red">
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
            <li class="py-2"><i class="bi bi-envelope-fill me-1"></i>example@gmail.com</li>
            <li class="py-2"><i class="bi bi-telephone-fill me-1"></i>07-7766123</li>
          </ol>
        </div>
        <div class="col-10 col-sm-8 col-md-4 p-3">
          <ul class="px-0" style="list-style-type: none;">
            <h2>關於我們</h2>
            <li class="py-1">
              <router-link to="/about" class="text-black text-decoration-none">
                <button class="btn btn-arrow bi bi-arrow-right-circle p-0"> 關於我們</button>
              </router-link>
            </li>
            <li class="py-1">
              <router-link to="/productList" class="text-black text-decoration-none">
                <button class="btn btn-arrow bi bi-arrow-right-circle p-0"> 產品列表</button>
              </router-link>
            </li>
            <li class="py-1">
              <router-link to="/faq" class="text-black text-decoration-none">
                <button class="btn btn-arrow bi bi-arrow-right-circle p-0"> 常見問題</button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center fs-6">
        <p>本網站為個人練習使用，無商業用途</p>
        <p>© 2023 Gary Huang All rights reserved.</p>
      </div>
  </footer>
</template>
