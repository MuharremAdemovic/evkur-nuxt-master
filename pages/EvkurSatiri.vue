<template>
  <div class="container top-menu-container ins-header-wrapper-c122">
    <a href="javascript:void(0)" class="menu-icon mobile vcenter">
      <span></span>
    </a>
    <div class="logo">
      <a href="/" title="Evkur">
        <h1>
          <img src="@/assets/logo.png" alt="Evkur" />
        </h1>
      </a>
    </div>
    <div class="search">
      <form
        action="/arama"
        class="validate"
        method="get"
        novalidate="novalidate"
      >
        <img src="@/assets/search-icon.png" />
        <input
          type="text"
          placeholder="Aradığınız ürünü buraya yazınız."
          name="searchTerm"
          autocomplete="OFF"
          minlengthattr="3"
          class="validate-item"
          style="border: 0.04rem solid rgb(239, 74, 38)"
        />
        <a href="javascript:void(0)" class="submit-button"> ARA </a>
        <input
          type="hidden"
          name="languageId"
          value="1"
          style="border: 0.04rem solid rgb(239, 74, 38)"
        />
      </form>
    </div>
    <div class="buttons ins-header-button-wrapper-c122">
      <a href="/uye-girisi" class="button with-border with-icon">
        <img src="@/assets/user-icon.png" />
        <span>GİRİŞ YAP / ÜYE OL</span>
      </a>

      <a href="/sepetim" class="button red with-icon mini-shopping-cart">
        <img class="desktop" src="@/assets/shopping-cart-icon.png" />
        <span>SEPETİM</span>
      </a>
    </div>
  </div>
</template>

