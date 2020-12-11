<template>
  <div>
    <div class="container menu-container checkout-steps-menu-container">
      <div class="menu-items">
        <div class="menu-item active">
          <a href="javascript:void(0)"> Sepet </a>
        </div>
        <div class="menu-item">
          <a href="javascript:void(0)"> Teslimat / Fatura Bilgileri </a>
        </div>
        <div class="menu-item">
          <a href="javascript:void(0)"> Ödeme Bilgileri </a>
        </div>
        <div class="menu-item">
          <a href="javascript:void(0)"> Sipariş Onayı </a>
        </div>
      </div>
    </div>
    <section class="payment-method-section">
      <div class="container">
        <div class="checkout-title">Ödeme Yöntemi Seçin</div>
        <div class="checkout-options payment-methods-checkout-options">
          <form
            class="validate"
            ajaxcallname="selectPaymentMethod"
            novalidate="novalidate"
          >
            <div
              class="checkout-option"
              data-value="MoneyTransfer"
              data-installment="PS"
            >
              <a
                href="javascript:void(0)"
                class="checkout-option-button checkout-option-button-action vcenter"
              >
                <div>
                  <img src="../static/Icons/payment-option-MoneyTransfer.png" />

                  <span> Havale / EFT </span>
                </div>
              </a>
            </div>
            <div
              class="checkout-option"
              data-value="CreditCard"
              data-installment="PSK"
            >
              <a
                href="javascript:void(0)"
                class="checkout-option-button checkout-option-button-action vcenter"
              >
                <div>
                  <img src="../static/Icons/payment-option-CreditCard.png" />

                  <span> Kredi Kartı </span>
                </div>
              </a>
            </div>
            <div
              class="checkout-option"
              data-value="Contract"
              data-installment="K0"
            >
              <a
                href="javascript:void(0)"
                class="checkout-option-button checkout-option-button-action vcenter"
              >
                <div>
                  <img src="../static/Icons/payment-option-Contract.png" />
                  <span> Taksitli Sözleşme </span>
                </div>
              </a>
            </div>
            <input
              type="hidden"
              name="code"
              class="checkout-option-hidden-input"
            />
            <input type="hidden" value="1" name="languageId" />
            <input type="hidden" id="checkout-installment" name="installment" />
          </form>
        </div>
      </div>
    </section>
    <section class="shoppingcart-section">
      <div class="container">
        <div class="checkout-title">
          Alışveriş Sepeti
          <a
            href="javascript:void(0)"
            class="button red mobile cart-form-submit-button"
          >
            <span> Sonraki Adım </span>
          </a>
        </div>
        <div class="cart">
          <div class="products">
            <div class="titles">
              <div class="image"></div>
              <div class="name">Ürün Adı</div>
              <div class="quantity">Adet</div>
              <div class="price">Birim Fiyatı</div>
              <div class="total-price">Toplam Fiyat</div>
              <div class="remove"></div>
            </div>
            <div v-for="item in basket" :key="'basket'+item.id" class="product">
              <a
                :href="'/urun-detay/' + item.product.id"
                class="image"
              >
                <img
                  :src="item.product.image"
                  alt=""
                />
              </a>
              <nuxt-link :to="'/urun-detay/' + item.product.id" class="name">
                {{ item.product.title }} ( {{ item.color }} )
              </nuxt-link>
              <div class="quantity">
                <form
                  class="validate"
                  ajaxcallname="updateCart"
                  novalidate="novalidate"
                >
                  <div
                    class="product-quantity-selector submit-after-change"
                    data-value="1"
                  >
                    <a href="javascript:void(0)" @click="decrease(item.id)" class="minus"> - </a>
                    <span>
                      <span> {{ item.count }} </span>
                      Adet
                    </span>
                    <a href="javascript:void(0)" @click="increase(item.id)" class="plus"> + </a>
                    <input
                      type="hidden"
                      value="4188874"
                      name="shoppingCartItemId"
                    />
                    <input
                      type="hidden"
                      name="quantity"
                      class="product-quantity-hidden-input"
                      value="1"
                    />
                    <input type="hidden" value="1" name="languageId" />
                  </div>
                </form>
              </div>
              <div class="price">{{ item.product.price.toFixed(2) }} TL</div>
              <div class="total-price">
                <div class="total-price-text mobile">Toplam Fiyat:</div>
                {{ (item.product.price * item.count).toFixed(2) }} TL
              </div>
              <div class="remove">
                <form
                  class="remove-item-container validate"
                  ajaxcallname="updateCart"
                  novalidate="novalidate"
                >
                  <input
                    type="hidden"
                    value="4188874"
                    name="shoppingCartItemId"
                  />
                  <input type="hidden" value="0" name="quantity" />
                  <input type="hidden" value="1" name="languageId" />
                  <a
                    href="javascript:void(0)" @click="removeBasketItem(item.id)"
                    class="remove-button shopping-cart-remove-item-submit-button"
                  >
                    <span> x </span>
                    Kaldır
                  </a>
                </form>
              </div>
            </div>
          </div>
          <div class="cart-info">
            <div class="actions">
              <div class="coupon-code">
                <div class="continue-shopping">
                  <a
                    href="/ana-sayfa"
                    class="button with-border with-back-arrow"
                  >
                    <img src="../static/Icons/grey-button-back-arrow-icon.png" />
                    <span> Alışverişe Devam </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="cart-summary">
              <form class="cart-form" method="post">
                <input type="hidden" name="IsGift" value="false" />
                <input type="hidden" name="GiftNote" value="" />
                <div class="cart-summary-items">
                  <div class="cart-summary-item">
                    <div class="name">Ara Toplam:</div>
                    <div class="value">{{ subtotal }} TL</div>
                  </div>
                  <div class="cart-summary-item">
                    <div class="name">Nakliye:</div>
                    <div class="value">0<sup>,00</sup> TL</div>
                  </div>
                  <div class="cart-summary-item total">
                    <div class="name">Toplam:</div>
                    <div class="value">{{ total }} TL</div>
                  </div>
                </div>
                <div class="next-step">
                  <input type="hidden" value="1" name="languageId" />
                  <a
                    href="javascript:void(0)"
                    class="button red submit-button checkout-button"
                  >
                    <span> Sonraki Adım </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="seg-reco-wrapper seg-clear">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

    </div>

  </div>
</template>

<script>

export default {
  data: () => {
    return {

    };
  },
  created() {

  },
  computed: {
    basket(){
      return this.$store.getters['basket/getBasketItems'];
    },
    subtotal(){
      let total = 0;
      for (let i = 0; i < this.basket.length; i++) {
        total += this.basket[i].product.price;
      }
      return total.toFixed(2);
    },
    total() {
      let total = 0;
      for (let i = 0; i < this.basket.length; i++) {
        total += (this.basket[i].product.price * this.basket[i].count);
      }
      return total.toFixed(2);
    }
  },
  methods: {
    removeBasketItem(id){
      this.$store.dispatch('basket/removeBasketItem', id);
    },
    increase(id){
      this.$store.dispatch('basket/increaseBasketItem', id);
    },
    decrease(id){
      this.$store.dispatch("basket/decreaseBasketItem", id);
    }
  }
}
</script>

<style>
#basket .item-info {
  margin-top: 0;
}

#basket .price {
  min-height: 50px;
}

#basket .sgf-add-btn {
  margin-top: 0;
  padding-bottom: 20px;
  text-align: center;
}

#basket .sgf-add-btn a.item {
  padding: 0.2rem;
}

#basket .owl-next {
  background-color: unset;
}
#basket .owl-prev {
  background-color: unset;
}

#basket i.fa.fa-chevron-right {
  top: 175px;
  right: -15px;
  background-color: #ffffff;
  border: 2px solid;
  padding: 5px;
  border-radius: 5px;
  color: red;
  font-size: 24px;
}

#basket i.fa.fa-chevron-left {
  top: 175px;
  left: -15px;
  background-color: #ffffff;
  border: 2px solid;
  padding: 5px;
  border-radius: 5px;
  color: red;
  font-size: 24px;
}
.seg-rec-2 {
  padding-top: 20px;
  padding-bottom: 30px;
}
#basket h2 {
  font-size: 20px !important;
  text-transform: uppercase;
  font-family: "Proxima";
  text-align: center;
  color: #555555;
}
#basket .name {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
#basket .slider {
  margin-top: 0.05rem;
}

#basket span.old-price {
  text-decoration: line-through;
  width: 50% !important;
}
#basket .slider .item-info .price {
  width: auto !important;
}
#basket .slider .item-info .rating {
  width: 100% !important;
  text-align: right;
}

#basket .price span:not(.old-price) {
  font-size: 0.14rem;
}
#basket .price span:not(.old-price) sup {
  font-size: 0.1rem;
}
#basket .price span.old-price {
  font-size: 0.12rem;
}
#basket .price span.old-price sup {
  font-size: 0.08rem;
}

@media only screen and (max-width: 800px) {
  #basket button.owl-prev {
    margin-left: -28px;
  }
  #basket button.owl-next {
    margin-right: -28px;
  }
  #basket h2 {
    font-size: 16px !important;
    text-transform: uppercase;
    font-family: "Proxima";
    text-align: center;
    color: #555555;
  }
  #basket .slider {
    margin-top: 0.05rem;
  }
  #basket .price span:not(.old-price) {
    font-size: 0.45rem;
  }
  #basket .price span:not(.old-price) sup {
    font-size: 0.28rem;
  }
  #basket .price span.old-price {
    font-size: 0.35rem;
    display: unset;
  }
  #basket .price span.old-price sup {
    font-size: 0.25rem;
  }
  #basket .rating {
    margin-top: 0.3rem;
  }
  #basket .rating .stars {
    float: left;
  }
  #basket .item-image .discount-info {
    width: 42px;
    height: 30px;
    margin-right: -18px;
  }
  #basket .item-image .discount-info span {
    font-size: 9px;
  }
}
</style>
