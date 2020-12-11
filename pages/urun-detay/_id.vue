<template>
  <section>
    <div class="container">
      <div class="product-info mobile">
        <div class="product-code">Ürün Kodu: TR-A23 MAX-BLACK</div>
        <h1 class="name">
          <span> {{ product.title }} </span>
        </h1>
        <div class="rating">
          <div class="stars" data-rating="0">
            <div class="star">
              <img src="../../static/Icons/star-icon.png" />
              <img class="active" src="../../static/Icons/active-star-icon.png" />
            </div>
            <div class="star">
              <img src="../../static/Icons/star-icon.png" />
              <img class="active" src="../../static/Icons/active-star-icon.png" />
            </div>
            <div class="star">
              <img src="../../static/Icons/star-icon.png" />
              <img class="active" src="../../static/Icons/active-star-icon.png" />
            </div>
            <div class="star">
              <img src="../../static/Icons/star-icon.png" />
              <img class="active" src="../../static/Icons/active-star-icon.png" />
            </div>
            <div class="star">
              <img src="../../static/Icons/star-icon.png" />
              <img class="active" src="../../static/Icons/active-star-icon.png" />
            </div>
          </div>

          <a href="javascript:void(0)" class="make-first-comment">
            Bu ürünü ilk yorumlayan siz olun!
          </a>
        </div>
      </div>
      <div class="product-image">
        <div
          class="image"
          data-zoom-image="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a23-siyah_po6c1y_1920.jpg"
          style="position: relative; overflow: hidden"
        >
          <img
            :src="product.image"
            alt="Trident A23 Max 64GB Siyah Akıllı Telefon"
          />
          
        </div>
        <div class="items">
          <a
            href="javascript:void(0)"
            class="item active"
            data-zoom-image="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a23-siyah_po6c1y_1920.jpg"
          >
            <img
              :src="product.image"
              alt="Trident A23 Max 64GB Siyah Akıllı Telefon"
            />
          </a>
        </div>
      </div>
      <div class="product-image mobile">
        <div class="images owl-carousel owl-loaded owl-drag">
          <div class="owl-stage-outer">
            <div
              class="owl-stage"
              style="
                transform: translate3d(0px, 0px, 0px);
                transition: all 0s ease 0s;
              "
            >
              <div class="owl-item">
                <div
                  class="image"
                  data-zoom-image="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a23-siyah_po6c1y_1920.jpg"
                ></div>
              </div>
            </div>
          </div>
          <div class="owl-nav disabled">
            <button type="button" role="presentation" class="owl-prev">
              <span aria-label="Previous">‹</span></button
            ><button type="button" role="presentation" class="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div class="owl-dots disabled">
            <button role="button" class="owl-dot active"><span></span></button>
          </div>
        </div>
      </div>
      <div class="product-info">
        <h1 class="name">
          <span>{{ product.title }}</span>
        </h1>
        <div class="rating">
          <div class="stars" data-rating="0">
            <div class="star">
              <img src="../../static/Icons/star-icon.png" />
              <img class="active" src="../../static/Icons/active-star-icon.png" />
            </div>
            <div class="star">
              <img src="../../static/Icons/star-icon.png" />
              <img class="active" src="../../static/Icons/active-star-icon.png" />
            </div>
            <div class="star">
              <img src="../../static/Icons/star-icon.png" />
              <img class="active" src="../../static/Icons/active-star-icon.png" />
            </div>
            <div class="star">
              <img src="../../static/Icons/star-icon.png" />
              <img class="active" src="../../static/Icons/active-star-icon.png" />
            </div>
            <div class="star">
              <img src="../../static/Icons/star-icon.png" />
              <img class="active" src="../../static/Icons/active-star-icon.png" />
            </div>
          </div>

          <a href="javascript:void(0)" class="make-first-comment">
            Bu ürünü ilk yorumlayan siz olun!
          </a>
          <div class="price">
            <div class="price-title">
              <span>*</span> Fiyat seçimi sepet adımında yapılacaktır.
            </div>
            <div class="price-options">
              <h2 class="price-option">
                <span> Kredi Kartı / Havale / EFT </span>
                <span class="old-price">2,299<sup>,00</sup> TL</span>
                2,099<sup>,00</sup> TL
              </h2>
              <h2 class="price-option">
                <span> 366,50 TL X 6 Taksit </span>
                <span class="old-price">2,299<sup>,00</sup> TL</span>
                2,199<sup>,00</sup> TL
              </h2>
              <h2 class="price-option">
                <span> 191,58 TL X 12 Taksit </span>
                2,299<sup>,00</sup> TL
              </h2>
            </div>
          </div>
          <div class="group-products">
            <div class="title">Renk</div>
            <a @click="color = 'beyaz'" href="javascript:void(0)" class="item" :class="color === 'beyaz' ? 'selected' : ''">Beyaz</a>
            <a @click="color = 'siyah'" href="javascript:void(0)" class="item" :class="color === 'siyah' ? 'selected' : ''"> Siyah </a>
            <a @click="color = 'mavi'" href="javascript:void(0)" class="item" :class="color === 'mavi' ? 'selected' : ''">Mavi</a>
          </div>

          <div class="product-actions">
            <form
              action="/"
              ajaxcallname="insAddProductToCart"
              class="validate"
              method="post"
              novalidate="novalidate"
            >
              <input
                id="languageId"
                name="languageId"
                type="hidden"
                value="1"
              /><input
                data-val="true"
                data-val-number="The field Id must be a number."
                data-val-required="Id alanı gereklidir."
                id="Id"
                name="Id"
                type="hidden"
                value="214251"
              />
              <div
                class="product-quantity-selector"
                data-max="1"
                data-value="1"
              >
                <a href="javascript:void(0)" @click="decsreaseCount()" class="minus"> - </a>
                <span>
                  <span> {{ count }} </span>
                  Adet
                </span>
                <a href="javascript:void(0)" @click="count++" class="plus"> + </a>
                <input
                  type="hidden"
                  name="Quantity"
                  class="product-quantity-hidden-input"
                  value="1"
                />
              </div>
              <a
                href="javascript:void(0)"
                class="button red add-to-cart-button submit-button"
                data-lb-action="buy"
                @click="addBasket"
              >
                <span>SEPETE EKLE</span>
              </a>
            </form>
          </div>
          <div class="sub-actions">
            <div class="sub-action sub-action-favorite">
              <form
                action=""
                method="post"
                class="validate"
                ajaxcallname="addProductToFavorites"
                novalidate="novalidate"
              >
                <img
                  src="../../static/Icons/product-favorite-icon.png"
                  class="submit-button"
                />
                <span class="submit-button"> Favorilerime Ekle </span>
                <input type="hidden" name="languageId" value="1" />
                <input type="hidden" name="productId" value="214251" />
              </form>
            </div>
            <div class="sub-action sub-action-comparison">
              <form
                action=""
                method="post"
                class="validate"
                ajaxcallname="AddProductToComparisonList"
                novalidate="novalidate"
              >
                <img
                  src="../../static/Icons/product-compare-icon.png"
                  class="submit-button"
                />
                <span class="submit-button">
                  Karşılaştırma Listesine Ekle
                </span>
                <input type="hidden" name="languageId" value="1" />
                <input type="hidden" name="productId" value="214251" />
              </form>
            </div>
            <a href="javascript:void(0)" class="sub-action sub-action-share">
              <img src="../../static/Icons/product-share-icon.png" alt="share" />
              <span> Paylaş </span>
            </a>
            <div class="sub-action sub-action-pricealert">
              <form
                action=""
                method="post"
                class="validate"
                ajaxcallname="AddProductPriceAlert"
                novalidate="novalidate"
              >
                <img
                  src="../../static/Icons/product-price-alarm-icon.png"
                  class="submit-button"
                />
                <span class="submit-button"> Fiyatı düşünce haber ver </span>
                <input type="hidden" name="languageId" value="1" />
                <input type="hidden" name="productId" value="214251" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tab product-tab">
        <div class="tab-links">
          <h3 class="tab-link active" style="width: calc(25%)">
            <span> ÜRÜN BİLGİSİ </span>
          </h3>
          <h3 class="tab-link" style="width: calc(25%)">
            <span> TAKSİT BİLGİLERİ </span>
          </h3>
          <h3 class="tab-link tab-link-comment" style="width: calc(25%)">
            <span> ÜRÜN YORUMLARI </span>
          </h3>
          <h3 class="tab-link tab-link-campaigns" style="width: calc(25%)">
            <span> KAMPANYALAR </span>
          </h3>
        </div>
        <div class="tab-items">
          <div class="tab-item active">
            <div class="product-description-text">
              <div>
                <p>
                  <img
                    style="margin: 15px auto; display: block"
                    src="https://cdn.evkur.com.tr/c/Product/trident-logo_c0pna5.jpg"
                  />
                </p>
                <p style="text-align: center">
                  <img
                    src="https://cdn.evkur.com.tr/c/Product/group-27_zo82rb.png"
                  />
                </p>
                <p>&nbsp;</p>
                <p style="text-align: center">
                  <img
                    src="https://cdn.evkur.com.tr/c/Product/group-28_a8mwq7.png"
                  />
                </p>
                <p>&nbsp;</p>
                <p
                  style="
                    max-width: 900px !important;
                    height: auto;
                    display: block;
                    margin: 5px auto;
                    text-align: center;
                  "
                >
                  <img
                    src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/trident-a23-kamera-fotograf-ornegi.png"
                  />
                </p>
                <p>&nbsp;</p>
                <p style="text-align: center">
                  <img
                    src="https://cdn.evkur.com.tr/c/Product/group-30_nm72ea.png"
                  />
                </p>
                <p>&nbsp;</p>
                <p style="text-align: center">
                  <img
                    src="https://cdn.evkur.com.tr/c/Product/group-31_k3eqm1.png"
                  />
                </p>
                <p style="text-align: center">&nbsp;</p>
                <p>&nbsp;</p>
                <p style="text-align: center">
                  <img
                    src="https://cdn.evkur.com.tr/c/Product/group-32_z6jhk8.png"
                  />
                </p>
                <p>&nbsp;</p>
                <p style="text-align: center">
                  <img
                    src="https://cdn.evkur.com.tr/c/Product/group-33_q0plo5.png"
                  />
                </p>
                <p>&nbsp;</p>
                <p style="text-align: center">
                  <img
                    src="https://cdn.evkur.com.tr/c/Product/group-34_zm39eg.png"
                  />
                </p>
                <p>&nbsp;</p>
                <p style="text-align: center">
                  <img
                    src="https://cdn.evkur.com.tr/c/Product/group-36_z4l9dd.png"
                  />
                </p>
                <p>&nbsp;</p>
              </div>
              <div class="product-detail-specifications-title">
                ÜRÜN ÖZELLİKLERİ
              </div>
              <table class="product-detail-specifications">
                <tbody>
                  <tr>
                    <td>Marka</td>
                    <td>Trident</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>A23 Max</td>
                  </tr>
                  <tr>
                    <td>Ürün Çeşidi</td>
                    <td>Cep Telefonu</td>
                  </tr>
                  <tr>
                    <td>Ekran Boyutu</td>
                    <td>6,35"</td>
                  </tr>
                  <tr>
                    <td>Ekran Boyutu (İnç)</td>
                    <td>6"-7"</td>
                  </tr>
                  <tr>
                    <td>İşlemci Hızı</td>
                    <td>8 Çekirdekli(4x1.6GHz + 4x1.2GHz)</td>
                  </tr>
                  <tr>
                    <td>Depolama</td>
                    <td>64 GB</td>
                  </tr>
                  <tr>
                    <td>Bellek (RAM)</td>
                    <td>4 GB</td>
                  </tr>
                  <tr>
                    <td>Ekran Tipi</td>
                    <td>HD+</td>
                  </tr>
                  <tr>
                    <td>Dokunmatik Ekran</td>
                    <td>Var</td>
                  </tr>
                  <tr>
                    <td>Telefon Tipi</td>
                    <td>Bar Tipi</td>
                  </tr>
                  <tr>
                    <td>Kamera</td>
                    <td>8MP+16MP</td>
                  </tr>
                  <tr>
                    <td>Ön Kamera</td>
                    <td>Var</td>
                  </tr>
                  <tr>
                    <td>Ön Kamera Çözünürlüğü</td>
                    <td>8,0 Megapixel</td>
                  </tr>
                  <tr>
                    <td>Ekran Çözünürlüğü</td>
                    <td>1560 x 720</td>
                  </tr>
                  <tr>
                    <td>Bluetooth</td>
                    <td>Var</td>
                  </tr>
                  <tr>
                    <td>Wi-Fi</td>
                    <td>Var</td>
                  </tr>
                  <tr>
                    <td>GPS</td>
                    <td>Var</td>
                  </tr>
                  <tr>
                    <td>Parmak İzi Okuyucu</td>
                    <td>Var</td>
                  </tr>
                  <tr>
                    <td>Çift Sim</td>
                    <td>Var</td>
                  </tr>
                  <tr>
                    <td>4.5G Desteği</td>
                    <td>Var</td>
                  </tr>
                  <tr>
                    <td>Hafıza Kartı Desteği</td>
                    <td>Micro SD 256 GB (max)</td>
                  </tr>
                  <tr>
                    <td>İşletim Sistemi</td>
                    <td>ANDROID</td>
                  </tr>
                  <tr>
                    <td>Renk</td>
                    <td>Siyah</td>
                  </tr>
                  <tr>
                    <td>Üretici Garantisi (yıl)</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-item">
            <ul class="installment-infos">
              <li>
                Taksit seçimi yapabilmek için ürünü sepete eklemeniz
                gerekmektedir.
              </li>
              <li>Tüm Kartlarınızla TEK ÇEKİM Yapabilirsiniz.</li>
              <li>
                * Bu sembolün bulunduğu taksit sayısında vade farkı uygulaması
                mevcuttur.
              </li>
            </ul>
            <div class="evkur-installments">
              <div class="logo">
                <img src="/Content/Icons/evkur-finansman-logo.png" />
              </div>
              <div class="evkur-installment-items">
                <div class="evkur-installment-item">
                  <div class="title">6 TAKSİT</div>
                  <div class="text">
                    366,50 TL X 6
                    <span> (2.199,00 TL) </span>
                  </div>
                </div>
                <div class="evkur-installment-item">
                  <div class="title">12 TAKSİT</div>
                  <div class="text">
                    191,58 TL X 12
                    <span> (2.299,00 TL) </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="installments">
              <table cellpadding="0" cellspacing="0" border="0" class="mobile">
                <thead>
                  <tr>
                    <th style="width: 50%">
                      <img
                        src="/Content/installments/installment-Bonus.png"
                        alt="Bonus"
                      />
                    </th>
                    <th style="width: 50%">
                      <img
                        src="/Content/installments/installment-World.png"
                        alt="World"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      2.099,00 TL
                      <br />
                      Tek Çekim
                      <span> (2.099,00 TL) </span>
                    </td>
                    <td>
                      2.099,00 TL
                      <br />
                      Tek Çekim
                      <span> (2.099,00 TL) </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" border="0" class="mobile">
                <thead>
                  <tr>
                    <th style="width: 50%">
                      <img
                        src="/Content/installments/installment-CardFinans.png"
                        alt="Card Finans"
                      />
                    </th>
                    <th style="width: 50%">
                      <img
                        src="/Content/installments/installment-Axess.png"
                        alt="Axess"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      2.099,00 TL
                      <br />
                      Tek Çekim
                      <span> (2.099,00 TL) </span>
                    </td>
                    <td>
                      2.099,00 TL
                      <br />
                      Tek Çekim
                      <span> (2.099,00 TL) </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" border="0" class="mobile">
                <thead>
                  <tr>
                    <th style="width: 50%">
                      <img
                        src="/Content/installments/installment-Paraf.png"
                        alt="Paraf"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      2.099,00 TL
                      <br />
                      Tek Çekim
                      <span> (2.099,00 TL) </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th style="width: 16.666%">
                      <img
                        src="/Content/installments/installment-Bonus.png"
                        alt="Bonus"
                      />
                    </th>
                    <th style="width: 16.666%">
                      <img
                        src="/Content/installments/installment-World.png"
                        alt="World"
                      />
                    </th>
                    <th style="width: 16.666%">
                      <img
                        src="/Content/installments/installment-CardFinans.png"
                        alt="Card Finans"
                      />
                    </th>
                    <th style="width: 16.666%">
                      <img
                        src="/Content/installments/installment-Axess.png"
                        alt="Axess"
                      />
                    </th>
                    <th style="width: 16.666%">
                      <img
                        src="/Content/installments/installment-Paraf.png"
                        alt="Paraf"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      2.099,00 TL
                      <br />
                      Tek Çekim
                      <span> (2.099,00 TL) </span>
                    </td>
                    <td>
                      2.099,00 TL
                      <br />
                      Tek Çekim
                      <span> (2.099,00 TL) </span>
                    </td>
                    <td>
                      2.099,00 TL
                      <br />
                      Tek Çekim
                      <span> (2.099,00 TL) </span>
                    </td>
                    <td>
                      2.099,00 TL
                      <br />
                      Tek Çekim
                      <span> (2.099,00 TL) </span>
                    </td>
                    <td>
                      2.099,00 TL
                      <br />
                      Tek Çekim
                      <span> (2.099,00 TL) </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-item">
            <div class="rating">
              <div class="avarage vcenter">
                <div>
                  <span> Ürün Puanı Ortalaması </span>
                  <div class="stars" data-rating="0">
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="rating-details">
                <div class="rating-detail-item">
                  <div class="stars">
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                  </div>
                  <div class="percentage" data-percentage="0">
                    <span data-text="0%" style="width: 0%"> </span>
                  </div>
                  <div class="text">Çok İyi</div>
                </div>
                <div class="rating-detail-item">
                  <div class="stars">
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                  </div>
                  <div class="percentage" data-percentage="0">
                    <span data-text="0%" style="width: 0%"> </span>
                  </div>
                  <div class="text">İyi</div>
                </div>
                <div class="rating-detail-item">
                  <div class="stars">
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                  </div>
                  <div class="percentage" data-percentage="0">
                    <span data-text="0%" style="width: 0%"> </span>
                  </div>
                  <div class="text">Normal</div>
                </div>
                <div class="rating-detail-item">
                  <div class="stars">
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                  </div>
                  <div class="percentage" data-percentage="0">
                    <span data-text="0%" style="width: 0%"> </span>
                  </div>
                  <div class="text">İdare Eder</div>
                </div>
                <div class="rating-detail-item">
                  <div class="stars">
                    <div class="star active">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                    <div class="star">
                      <img src="/Content/Icons/star-icon.png" />
                      <img
                        class="active"
                        src="/Content/Icons/active-star-icon.png"
                      />
                    </div>
                  </div>
                  <div class="percentage" data-percentage="0">
                    <span data-text="0%" style="width: 0%"> </span>
                  </div>
                  <div class="text">Kötü</div>
                </div>
              </div>
            </div>
            <form
              class="validate comment-rating-form"
              method="post"
              ajaxcallname="addProductComment"
              novalidate="novalidate"
            >
              <div class="make-rating">
                <div class="title">Ürünü Puanla</div>
                <div class="rating-items">
                  <div class="rating-item">
                    <input
                      type="radio"
                      name="point"
                      id="product-rating-1"
                      value="1"
                      class="validate-item"
                    />
                    <label for="product-rating-1"> Kötü </label>
                  </div>
                  <div class="rating-item">
                    <input
                      type="radio"
                      name="point"
                      id="product-rating-2"
                      value="2"
                      class="validate-item"
                    />
                    <label for="product-rating-2"> İdare Eder </label>
                  </div>
                  <div class="rating-item">
                    <input
                      type="radio"
                      name="point"
                      id="product-rating-3"
                      value="3"
                      class="validate-item"
                    />
                    <label for="product-rating-3"> Normal </label>
                  </div>
                  <div class="rating-item">
                    <input
                      type="radio"
                      name="point"
                      id="product-rating-4"
                      value="4"
                      class="validate-item"
                    />
                    <label for="product-rating-4"> İyi </label>
                  </div>
                  <div class="rating-item">
                    <input
                      type="radio"
                      name="point"
                      id="product-rating-5"
                      value="5"
                      class="validate-item"
                    />
                    <label for="product-rating-5"> Çok İyi </label>
                  </div>
                </div>
              </div>
              <div class="make-comment">
                <div class="title">Yorum Yap</div>
                <div class="comment-form">
                  <input
                    id="LanguageId"
                    name="LanguageId"
                    type="hidden"
                    value="1"
                  />
                  <input
                    id="ProductId"
                    name="ProductId"
                    type="hidden"
                    value="214251"
                  />
                  <div class="form-item">
                    <label> Yorum başlığı: </label>
                    <input type="text" name="Title" class="validate-item" />
                  </div>
                  <div class="form-item">
                    <label> Yorum metni: </label>
                    <textarea name="Message" class="validate-item"></textarea>
                  </div>
                  <div class="form-item">
                    <div
                      class="g-recaptcha"
                      data-sitekey="6Le3FcQUAAAAADZzZ9PKhQLaZoKDgtb4bjk5S8v3"
                      data-callback="gRecaptchaCallback"
                    >
                      <div style="width: 304px; height: 78px">
                        <div>
                          <iframe
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Le3FcQUAAAAADZzZ9PKhQLaZoKDgtb4bjk5S8v3&amp;co=aHR0cHM6Ly93d3cuZXZrdXIuY29tLnRyOjQ0Mw..&amp;hl=tr&amp;v=UFwvoDBMjc8LiYc1DKXiAomK&amp;size=normal&amp;cb=2qihd54oktym"
                            width="304"
                            height="78"
                            role="presentation"
                            name="a-krycasly2bfn"
                            frameborder="0"
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                          ></iframe>
                        </div>
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          class="g-recaptcha-response"
                          style="
                            width: 250px;
                            height: 40px;
                            border: 1px solid rgb(193, 193, 193);
                            margin: 10px 25px;
                            padding: 0px;
                            resize: none;
                            display: none;
                          "
                        ></textarea>
                      </div>
                      <iframe __idm_frm__="1206" style="display: none"></iframe>
                    </div>
                    <input
                      type="hidden"
                      id="g-recaptcha-input"
                      name="reCaptchaToken"
                    />
                  </div>
                  <div class="form-item form-item-button">
                    <a
                      href="javascript:void(0)"
                      class="button red submit-button"
                    >
                      <span> YORUMU GÖNDER </span>
                    </a>
                  </div>
                </div>
              </div>
              <input type="hidden" name="languageId" value="1" />
            </form>
            <div class="comments"></div>
          </div>
          <div class="tab-item">
            <div class="product-description-campaigns"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      count: 1,
      color: 'beyaz'
    };
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("product/initData");
    this.$store.dispatch("product/setProduct", parseInt(id));
  },
  computed: {
    product(){
      return this.$store.getters['product/getProduct'];
    }
  },
  methods: {
    decsreaseCount(){
      if (this.count > 1) {
        this.count--;
      }
    },
    addBasket() {
      const payload = {
        id: Math.random() * 1000,
        count: this.count,
        color: this.color,
        product: this.product
      };
      this.$store.dispatch('basket/addBasket', payload);
    }
  }
}
</script>
