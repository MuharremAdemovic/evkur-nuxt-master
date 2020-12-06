<template>
  <section class="breadcrumb-section">
    <div class="container">
      <a href="/ana-sayfa" class="breadcrumb-item"> Ana Sayfa </a>

      <h1 class="breadcrumb-item">
        Telefon (<span class="product-count">281</span>)
      </h1>
    </div>
    <div id="product-list" class="container">
      <div class="filter-container" data-productcount="85">
        <a href="javascript:void(0)" class="filter-close-icon mobile">
          <span></span>
        </a>
        <form
          action="/"
          ajaxcallname="filterProductList"
          class="validate product-list-filter-form"
          method="post"
          novalidate="novalidate"
        >
          <div class="filter">
            <div class="filter-title">ALT KATEGORİLER</div>
            <div class="filter-items">
              <div class="filter-item">
                <a href="/samsung-cep-telefonlari"> Samsung </a>
              </div>
              <div class="filter-item">
                <a href="/realmi-cep-telefonlari"> Realme </a>
              </div>
              <div class="filter-item">
                <a href="/trident-2"> Trident </a>
              </div>
              <div class="filter-item">
                <a href="/oppo-cep-telefonlari"> Oppo </a>
              </div>
              <div class="filter-item">
                <a href="/xiaomi-cep-telefonlari"> Xiaomi </a>
              </div>
              <div class="filter-item">
                <a href="/huawei-cep-telefonlari"> Huawei </a>
              </div>
              <div class="filter-item">
                <a href="/alcatel-cep-telefonlari"> Alcatel </a>
              </div>
              <div class="filter-item">
                <a href="/tcl-cep-telefonlari"> TCL </a>
              </div>
            </div>
          </div>
          <div class="filter specification-filter">
            <div class="filter-title">Marka</div>
            <div class="filter-items">
              <div class="filter-item">
                <input type="checkbox" id="spec-1069-1264" value="1264" />
                <label for="spec-1069-1264">
                  Samsung
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-1069-5822" value="5822" />
                <label for="spec-1069-5822">
                  Huaweı
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-1069-31663" value="31663" />
                <label for="spec-1069-31663">
                  Xıaomı
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-1069-39948" value="39948" />
                <label for="spec-1069-39948">
                  Oppo
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-1069-1772" value="1772" />
                <label for="spec-1069-1772">
                  Alcatel
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1069-43809" value="43809" />
                <label for="spec-1069-43809">
                  Tcl
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1069-44816" value="44816" />
                <label for="spec-1069-44816">
                  Realme
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1069-1276" value="1276" />
                <label for="spec-1069-1276">
                  Trident
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-hide-item">
                <span> Daha fazla göster </span>
                <span> Daha az göster </span>
              </div>
            </div>
          </div>
          <div class="filter specification-filter">
            <div class="filter-title">Model</div>
            <div class="filter-items">
              <div class="filter-item">
                <input type="checkbox" id="spec-1284-27921" value="27921" />
                <label for="spec-1284-27921">
                  A52
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-1284-42723" value="42723" />
                <label for="spec-1284-42723">
                  Galaxy Note 10 (N970)
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-1284-43658" value="43658" />
                <label for="spec-1284-43658">
                  Redmi Note 8 Pro
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-1284-44885" value="44885" />
                <label for="spec-1284-44885">
                  Galaxy S20 Ultra (G988B)
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-1284-44892" value="44892" />
                <label for="spec-1284-44892">
                  Galaxy S20+ (G985F)
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-44898" value="44898" />
                <label for="spec-1284-44898">
                  Galaxy S20 (G980F)
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46225" value="46225" />
                <label for="spec-1284-46225">
                  Redmi Note 9 Pro
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46241" value="46241" />
                <label for="spec-1284-46241">
                  6
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46254" value="46254" />
                <label for="spec-1284-46254">
                  Galaxy A31 (A315F)
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46270" value="46270" />
                <label for="spec-1284-46270">
                  Galaxy A21s (A215F)
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46301" value="46301" />
                <label for="spec-1284-46301">
                  Galaxy Z Flip (F700F)
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46309" value="46309" />
                <label for="spec-1284-46309">
                  Galaxy A11 (A115F)
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46315" value="46315" />
                <label for="spec-1284-46315">
                  Reno 3
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46430" value="46430" />
                <label for="spec-1284-46430">
                  Redmi Note 9
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46454" value="46454" />
                <label for="spec-1284-46454">
                  Mi Note 10 Lite
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46526" value="46526" />
                <label for="spec-1284-46526">
                  10L
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46543" value="46543" />
                <label for="spec-1284-46543">
                  P40 Pro
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46548" value="46548" />
                <label for="spec-1284-46548">
                  P Smart S
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46781" value="46781" />
                <label for="spec-1284-46781">
                  Galaxy Note 20 Ultra (N985)
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46791" value="46791" />
                <label for="spec-1284-46791">
                  Y6P
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46832" value="46832" />
                <label for="spec-1284-46832">
                  P40
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-46935" value="46935" />
                <label for="spec-1284-46935">
                  3X 2020
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47011" value="47011" />
                <label for="spec-1284-47011">
                  Redmi Note 9S
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47186" value="47186" />
                <label for="spec-1284-47186">
                  Galaxy Z Fold2 (F916B)
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47192" value="47192" />
                <label for="spec-1284-47192">
                  Reno 4 Pro
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47193" value="47193" />
                <label for="spec-1284-47193">
                  A31
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47196" value="47196" />
                <label for="spec-1284-47196">
                  A72
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47198" value="47198" />
                <label for="spec-1284-47198">
                  A91
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47202" value="47202" />
                <label for="spec-1284-47202">
                  Reno 4 Lite
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47203" value="47203" />
                <label for="spec-1284-47203">
                  Reno 4
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47451" value="47451" />
                <label for="spec-1284-47451">
                  A23 Max
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47459" value="47459" />
                <label for="spec-1284-47459">
                  P Smart 2021
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47534" value="47534" />
                <label for="spec-1284-47534">
                  A53 Pro
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-1284-47902" value="47902" />
                <label for="spec-1284-47902">
                  A24
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-hide-item">
                <span> Daha fazla göster </span>
                <span> Daha az göster </span>
              </div>
            </div>
          </div>
          <div class="filter specification-filter">
            <div class="filter-title">Ekran Boyutu (İnç)</div>
            <div class="filter-items">
              <div class="filter-item">
                <input type="checkbox" id="spec-1919-8834" value="8834" />
                <label for="spec-1919-8834">
                  6"-7"
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-1919-41910" value="41910" />
                <label for="spec-1919-41910">
                  7"-8"
                  <span>KALDIR</span>
                </label>
              </div>
            </div>
          </div>
          <div class="filter specification-filter">
            <div class="filter-title">Ekran Tipi</div>
            <div class="filter-items">
              <div class="filter-item">
                <input type="checkbox" id="spec-52-1673" value="1673" />
                <label for="spec-52-1673">
                  AMOLED
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-52-1676" value="1676" />
                <label for="spec-52-1676">
                  TFT LCD
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-52-3650" value="3650" />
                <label for="spec-52-3650">
                  IPS LCD
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-52-7706" value="7706" />
                <label for="spec-52-7706">
                  Super AMOLED
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-52-22206" value="22206" />
                <label for="spec-52-22206">
                  FULL HD
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-52-22426" value="22426" />
                <label for="spec-52-22426">
                  HD+
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-52-29063" value="29063" />
                <label for="spec-52-29063">
                  OLED
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-52-39771" value="39771" />
                <label for="spec-52-39771">
                  FULL HD+
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-52-40276" value="40276" />
                <label for="spec-52-40276">
                  Dynamic AMOLED
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-52-41913" value="41913" />
                <label for="spec-52-41913">
                  Dinamik AMOLED
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-52-44887" value="44887" />
                <label for="spec-52-44887">
                  Dinamik AMOLED 2X
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-hide-item">
                <span> Daha fazla göster </span>
                <span> Daha az göster </span>
              </div>
            </div>
          </div>
          <div class="filter specification-filter">
            <div class="filter-title">Bellek (RAM)</div>
            <div class="filter-items">
              <div class="filter-item">
                <input type="checkbox" id="spec-9-59" value="59" />
                <label for="spec-9-59">
                  2 GB
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-9-7740" value="7740" />
                <label for="spec-9-7740">
                  3 GB
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-9-52" value="52" />
                <label for="spec-9-52">
                  4 GB
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-9-1248" value="1248" />
                <label for="spec-9-1248">
                  6 GB
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-9-1244" value="1244" />
                <label for="spec-9-1244">
                  8 GB
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-9-9012" value="9012" />
                <label for="spec-9-9012">
                  12 GB
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-hide-item">
                <span> Daha fazla göster </span>
                <span> Daha az göster </span>
              </div>
            </div>
          </div>
          <div class="filter specification-filter">
            <div class="filter-title">Kamera</div>
            <div class="filter-items">
              <div class="filter-item">
                <input type="checkbox" id="spec-13-36440" value="36440" />
                <label for="spec-13-36440">
                  12 MP+12 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-13-41466" value="41466" />
                <label for="spec-13-41466">
                  48 MP+8 MP+2 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-13-41915" value="41915" />
                <label for="spec-13-41915">
                  12 MP+16 MP+12 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-13-43231" value="43231" />
                <label for="spec-13-43231">
                  12 MP+8 MP+2 MP+2 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-13-43341" value="43341" />
                <label for="spec-13-43341">
                  48 MP+8 MP+2 MP+2 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-43661" value="43661" />
                <label for="spec-13-43661">
                  64 MP+8 MP+2 MP+2 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-44889" value="44889" />
                <label for="spec-13-44889">
                  12 MP+108 MP+48 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-44893" value="44893" />
                <label for="spec-13-44893">
                  12 MP+12 MP+64 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-45225" value="45225" />
                <label for="spec-13-45225">
                  13MP+2MP+5MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-46228" value="46228" />
                <label for="spec-13-46228">
                  64 MP+8 MP+5 MP+2 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-46256" value="46256" />
                <label for="spec-13-46256">
                  48 MP+5 MP+8 MP+5 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-46319" value="46319" />
                <label for="spec-13-46319">
                  48 MP+13 MP+8 MP+2 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-46456" value="46456" />
                <label for="spec-13-46456">
                  64 MP+8 MP+2 MP+5 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-46547" value="46547" />
                <label for="spec-13-46547">
                  50MP+12MP+40MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-46785" value="46785" />
                <label for="spec-13-46785">
                  12MP+108MP+12MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-46792" value="46792" />
                <label for="spec-13-46792">
                  13MP+5MP+2MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-46834" value="46834" />
                <label for="spec-13-46834">
                  50MP+16MP+8MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-46942" value="46942" />
                <label for="spec-13-46942">
                  48 MP+5 MP+2 MP+2 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-47012" value="47012" />
                <label for="spec-13-47012">
                  48 MP+8 MP+5 MP+2 MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-47190" value="47190" />
                <label for="spec-13-47190">
                  12MP+12MP+12MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-47195" value="47195" />
                <label for="spec-13-47195">
                  12MP+2MP+2MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-13-47453" value="47453" />
                <label for="spec-13-47453">
                  8MP+16MP
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-hide-item">
                <span> Daha fazla göster </span>
                <span> Daha az göster </span>
              </div>
            </div>
          </div>
          <div class="filter specification-filter">
            <div class="filter-title">Çift Sim</div>
            <div class="filter-items">
              <div class="filter-item">
                <input type="checkbox" id="spec-54-167" value="167" />
                <label for="spec-54-167">
                  Var
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-54-168" value="168" />
                <label for="spec-54-168">
                  Yok
                  <span>KALDIR</span>
                </label>
              </div>
            </div>
          </div>
          <div class="filter specification-filter">
            <div class="filter-title">Depolama</div>
            <div class="filter-items">
              <div class="filter-item">
                <input type="checkbox" id="spec-10-1483" value="1483" />
                <label for="spec-10-1483">
                  128 GB
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-10-7534" value="7534" />
                <label for="spec-10-7534">
                  32 GB
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-10-7563" value="7563" />
                <label for="spec-10-7563">
                  64 GB
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-10-23083" value="23083" />
                <label for="spec-10-23083">
                  256 GB
                  <span>KALDIR</span>
                </label>
              </div>
            </div>
          </div>
          <div class="filter specification-filter">
            <div class="filter-title">Renk</div>
            <div class="filter-items">
              <div class="filter-item">
                <input type="checkbox" id="spec-19-38" value="38" />
                <label for="spec-19-38">
                  Siyah
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-19-1527" value="1527" />
                <label for="spec-19-1527">
                  Mavi
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-19-2172" value="2172" />
                <label for="spec-19-2172">
                  Beyaz
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-19-2667" value="2667" />
                <label for="spec-19-2667">
                  Gri
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input type="checkbox" id="spec-19-3021" value="3021" />
                <label for="spec-19-3021">
                  Pembe
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-19-3134" value="3134" />
                <label for="spec-19-3134">
                  Mor
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-19-3290" value="3290" />
                <label for="spec-19-3290">
                  Yeşil
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-19-17925" value="17925" />
                <label for="spec-19-17925">
                  Parlak Siyah
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-19-31134" value="31134" />
                <label for="spec-19-31134">
                  Bronz
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-19-42727" value="42727" />
                <label for="spec-19-42727">
                  Duman Siyahı
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-19-42728" value="42728" />
                <label for="spec-19-42728">
                  Ay Tozu Grisi
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-19-46242" value="46242" />
                <label for="spec-19-46242">
                  Yıldız Beyazı
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-19-46305" value="46305" />
                <label for="spec-19-46305">
                  Parlak Mor
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item filter-item-hideable">
                <input type="checkbox" id="spec-19-47229" value="47229" />
                <label for="spec-19-47229">
                  Yıldızlı Gece
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-hide-item">
                <span> Daha fazla göster </span>
                <span> Daha az göster </span>
              </div>
            </div>
          </div>
          <div class="filter price-filter">
            <div class="filter-title">FİYAT</div>
            <div class="filter-items">
              <div class="filter-item">
                <input
                  type="checkbox"
                  id="price-2000-2499"
                  data-min="2000"
                  data-max="2499"
                />
                <label for="price-2000-2499">
                  2000 - 2499 TL
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input
                  type="checkbox"
                  id="price-2500-2999"
                  data-min="2500"
                  data-max="2999"
                />
                <label for="price-2500-2999">
                  2500 - 2999 TL
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input
                  type="checkbox"
                  id="price-3000-3499"
                  data-min="3000"
                  data-max="3499"
                />
                <label for="price-3000-3499">
                  3000 - 3499 TL
                  <span>KALDIR</span>
                </label>
              </div>
              <div class="filter-item">
                <input
                  type="checkbox"
                  id="price-3500--1"
                  data-min="3500"
                  data-max="-1"
                />
                <label for="price-3500--1">
                  3500 TL ve üstü
                  <span>KALDIR</span>
                </label>
              </div>
            </div>
          </div>
          <input type="hidden" name="languageId" value="1" />
          <input type="hidden" name="categoryId" value="75" />
          <input type="hidden" name="manufacturerId" />
          <input type="hidden" name="url" value="cep-telefonlari" />
          <input type="hidden" name="searchTerm" value="" />
          <input
            type="hidden"
            id="product-list-filter-price-start-hidden-input"
            name="priceStart"
            value="-1"
          />
          <input
            type="hidden"
            id="product-list-filter-price-end-hidden-input"
            name="priceEnd"
            value="-1"
          />
          <input
            type="hidden"
            id="product-list-filter-manufacturers-hidden-input"
            name="selectedManufacturerIds"
            value=""
          />
          <input
            type="hidden"
            id="product-list-filter-specification-values-hidden-input"
            name="selectedSpecificationValueIds"
            value=""
          />
          <input
            type="hidden"
            id="product-list-filter-order-by-hidden-input"
            name="orderBy"
            value="0"
          />
        </form>
      </div>
      <div class="product-list-container">
        <div class="seg-reco-wrapper seg-clear">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div class="container seg-rec-1-B" id="kategori1-B">
            <h2>Kategorinin Öne Çıkanları</h2>
            <div class="slider owl-carousel owl-theme owl-loaded owl-drag">
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="
                    transform: translate3d(-880px, 0px, 0px);
                    transition: all 0s ease 0s;
                    width: 3168px;
                  "
                >
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9-pro-128gb-yesil-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=205917&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %17
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-pro-04_lj0s4t_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-pro-04_lj0s4t_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9 Pro 128GB Yeşil Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,699<sup>,00</sup> TL </span>
                            <span class="old-price">
                              4,498<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/oppo-a91-8128-gb-mavi-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=213724&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/a91-mavi-1_jm3z7s_xn41db_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/a91-mavi-1_jm3z7s_xn41db_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Oppo A91 8/128GB Mavi Akıllı Telefon
                          </div>
                          <div class="price">
                            <span> 3,499<sup>,00</sup> TL </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9-128gb-gri-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=207632&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %8
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-128gb-016_sr8c1a_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9 128GB Gri Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,099<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,399<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9-64gb-yesil-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=207010&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %12
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-64gb_fm12ma_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9 64GB Yeşil Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 2,969<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,399<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9s-128gb-beyaz-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=213333&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %5
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-s-64-gb-beyaz_w3p0ke_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9S 128GB Beyaz Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,499<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,699<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/oppo-reno-4-lite-8128gb-beyaz-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=213728&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %5
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/reno4-lite-beyaz-1_g6xjo1_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/reno4-lite-beyaz-1_g6xjo1_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Oppo Reno 4 Lite 8/128GB Beyaz Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,499<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,699<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9-pro-64gb-mavi--gri-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=213168&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %22
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-pro_d8zti2_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-pro_d8zti2_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9 Pro 64GB Mavi - Gri Akıllı
                            Telefon
                          </div>

                          <div class="price">
                            <span> 3,399<sup>,00</sup> TL </span>
                            <span class="old-price">
                              4,398<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/huawei-p-smart-2021-128gb-siyah-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=214266&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %8
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/huawei-p-smart-2021-siyah-01_zn7e6r_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/huawei-p-smart-2021-siyah-01_zn7e6r_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Huawei P Smart 2021 128GB Siyah Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,199<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,499<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9-pro-128gb-yesil-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=205917&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %17
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-pro-04_lj0s4t_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-pro-04_lj0s4t_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9 Pro 128GB Yeşil Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,699<sup>,00</sup> TL </span>
                            <span class="old-price">
                              4,498<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/oppo-a91-8128-gb-mavi-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=213724&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/a91-mavi-1_jm3z7s_xn41db_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/a91-mavi-1_jm3z7s_xn41db_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Oppo A91 8/128GB Mavi Akıllı Telefon
                          </div>
                          <div class="price">
                            <span> 3,499<sup>,00</sup> TL </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9-128gb-gri-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=207632&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %8
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-128gb-016_sr8c1a_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9 128GB Gri Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,099<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,399<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9-64gb-yesil-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=207010&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %12
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-64gb_fm12ma_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9 64GB Yeşil Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 2,969<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,399<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9s-128gb-beyaz-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=213333&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %5
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-s-64-gb-beyaz_w3p0ke_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9S 128GB Beyaz Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,499<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,699<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/oppo-reno-4-lite-8128gb-beyaz-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=213728&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %5
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/reno4-lite-beyaz-1_g6xjo1_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/reno4-lite-beyaz-1_g6xjo1_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Oppo Reno 4 Lite 8/128GB Beyaz Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,499<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,699<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9-pro-64gb-mavi--gri-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=213168&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %22
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-pro_d8zti2_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-pro_d8zti2_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9 Pro 64GB Mavi - Gri Akıllı
                            Telefon
                          </div>

                          <div class="price">
                            <span> 3,399<sup>,00</sup> TL </span>
                            <span class="old-price">
                              4,398<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/huawei-p-smart-2021-128gb-siyah-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=214266&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %8
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/huawei-p-smart-2021-siyah-01_zn7e6r_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/huawei-p-smart-2021-siyah-01_zn7e6r_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Huawei P Smart 2021 128GB Siyah Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,199<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,499<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/xiaomi-redmi-note-9-pro-128gb-yesil-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=205917&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %17
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-pro-04_lj0s4t_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-pro-04_lj0s4t_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Xiaomi Redmi Note 9 Pro 128GB Yeşil Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 3,699<sup>,00</sup> TL </span>
                            <span class="old-price">
                              4,498<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/oppo-a91-8128-gb-mavi-akilli-telefon?_sgm_campaign=scn_87edfb066a000&amp;_sgm_source=213724&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/a91-mavi-1_jm3z7s_xn41db_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/a91-mavi-1_jm3z7s_xn41db_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Oppo A91 8/128GB Mavi Akıllı Telefon
                          </div>
                          <div class="price">
                            <span> 3,499<sup>,00</sup> TL </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-nav">
                <button type="button" role="presentation" class="owl-prev">
                  <i class="fa fa-chevron-left"></i></button
                ><button type="button" role="presentation" class="owl-next">
                  <i class="fa fa-chevron-right"></i>
                </button>
              </div>
              <div class="owl-dots">
                <button role="button" class="owl-dot active">
                  <span></span></button
                ><button role="button" class="owl-dot"><span></span></button>
              </div>
            </div>
          </div>

          <style>
            #kategori1-B .owl-next {
              background-color: unset;
            }
            #kategori1-B .owl-prev {
              background-color: unset;
            }

            #kategori1-B i.fa.fa-chevron-right {
              top: 175px;
              right: -15px;
              background-color: #ffffff;
              /*border: 2px solid;*/
              padding: 5px;
              border-radius: 5px;
              color: red;
              font-size: 28px;
            }

            #kategori1-B i.fa.fa-chevron-left {
              top: 175px;
              left: -15px;
              background-color: #ffffff;
              /*border: 2px solid;*/
              padding: 5px;
              border-radius: 5px;
              color: red;
              font-size: 28px;
            }
            #kategori1-B .slider {
              margin-top: 0.05rem;
            }
            #kategori1-B {
              padding-bottom: 15px;
            }
            #kategori1-B h2 {
              font-size: 20px !important;
              text-transform: uppercase;
              font-family: "Proxima";
              text-align: center;
              color: #555555;
            }
            #kategori1-B .name {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }

            #kategori1-B span.old-price {
              text-decoration: line-through;
            }

            #kategori1-B .slider .item-info .price {
              width: auto !important;
            }
            #kategori1-B .slider .item-info .rating {
              width: 100% !important;
              text-align: right;
            }
            #kategori1-B .price span:not(.old-price) {
              font-size: 0.14rem;
            }
            #kategori1-B .price span:not(.old-price) sup {
              font-size: 0.1rem;
            }
            #kategori1-B .price span.old-price {
              font-size: 0.12rem;
            }
            #kategori1-B .price span.old-price sup {
              font-size: 0.08rem;
            }

            @media only screen and (max-width: 800px) {
              #kategori1-B button.owl-prev {
                margin-left: -9px;
                margin-top: -59px;
              }
              #kategori1-B button.owl-next {
                margin-right: -9px;
                margin-top: -59px;
              }
              #kategori1-B h2 {
                font-size: 16px !important;
                text-transform: uppercase;
                padding-top: 10px;
                font-family: "Proxima";
                text-align: center;
                color: #555555;
              }
              #kategori1-B .price span:not(.old-price) {
                font-size: 0.45rem;
              }
              #kategori1-B .price span:not(.old-price) sup {
                font-size: 0.28rem;
              }
              #kategori1-B .price span.old-price {
                font-size: 0.35rem;
                display: unset;
              }
              #kategori1-B .price span.old-price sup {
                font-size: 0.25rem;
              }
              #kategori1-B .rating {
                margin-top: 0.3rem;
              }
              #kategori1-B .rating .stars {
                float: left;
              }
              #kategori1-B .item-image .discount-info {
                width: 42px;
                height: 30px;
                margin-right: -28px;
              }
              #kategori1-B .item-image .discount-info span {
                font-size: 9px;
              }
            }
          </style>
        </div>
        <div class="product-list-filter">
          <div class="product-layout-type type-1">
            <span> GÖSTERİM: </span>
            <img
              class="type-1"
              src="/Content/Icons/layout-type-1.png"
              data-type="type-1"
            />
            <img
              class="type-1-active"
              src="/Content/Icons/layout-type-1-active.png"
            />
            <img
              class="type-2"
              src="/Content/Icons/layout-type-2.png"
              data-type="type-2"
            />
            <img
              class="type-2-active"
              src="/Content/Icons/layout-type-2-active.png"
            />
          </div>
          <div class="product-sort">
            <span> SIRALAMA: </span>
            <div class="product-sort-select">
              <select
                data-select2-id="1"
                tabindex="-1"
                class="select2-hidden-accessible"
                aria-hidden="true"
              >
                <option value="0" selected="selected" data-select2-id="3">
                  Sizin için seçilenler
                </option>
                <option value="20">Fiyata göre artan</option>
                <option value="10">Fiyata göre azalan</option>
                <option value="30">A'dan Z'ye</option>
                <option value="40">Z'den A'ya</option></select
              ><span
                class="select2 select2-container select2-container--default"
                dir="ltr"
                data-select2-id="2"
                style="width: 100%"
                ><span class="selection"
                  ><span
                    class="select2-selection select2-selection--single"
                    role="combobox"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabindex="0"
                    aria-labelledby="select2-io1i-container"
                    ><span
                      class="select2-selection__rendered"
                      id="select2-io1i-container"
                      role="textbox"
                      aria-readonly="true"
                      title="
                        Sizin için seçilenler
                    "
                    >
                      Sizin için seçilenler </span
                    ><span class="select2-selection__arrow" role="presentation"
                      ><b role="presentation"></b></span></span></span
                ><span class="dropdown-wrapper" aria-hidden="true"></span
              ></span>
            </div>
          </div>
        </div>
        <div class="products">
          <div class="product">
            <a
              href="/samsung-galaxy-s20-plus-128gb-siyah-akilli-telefon-g985f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-s20-plus-siyah-05_b7h0pt_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-s20-plus-128gb-siyah-akilli-telefon-g985f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy S20 Plus 128GB Siyah Akıllı Telefon (G985F) "
                  >Samsung Galaxy S20 Plus 128GB Siyah Akıllı Telefon...</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-s20-plus-128gb-siyah-akilli-telefon-g985f"
                  class="price"
                >
                  <span class="old-price"> 9,299<sup>,00</sup> TL </span>
                  <span> 7,969<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-s20-plus-128gb-siyah-akilli-telefon-g985f"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %14 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a href="/samsung-n970-galaxy-note-10-duman-siyahi" class="image">
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-note10-duman-siyahi_g5khi0_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-n970-galaxy-note-10-duman-siyahi"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy Note 10 256GB Duman Siyahı Akıllı Telefon (N970)"
                  >Samsung Galaxy Note 10 256GB Duman Siyahı Akıllı...</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-n970-galaxy-note-10-duman-siyahi"
                  class="price"
                >
                  <span> 7,199<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-n970-galaxy-note-10-duman-siyahi"
                class="rating"
              >
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

                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-s20-ultra-128gb-gri-akilli-telefon-g988b"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/sm-galaxy-s20-ultra-gri-04_a6hnn4_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-s20-ultra-128gb-gri-akilli-telefon-g988b"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy S20 Ultra 128GB Gri Akıllı Telefon (G988B)"
                  >Samsung Galaxy S20 Ultra 128GB Gri Akıllı Telefon...</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-s20-ultra-128gb-gri-akilli-telefon-g988b"
                  class="price"
                >
                  <span class="old-price"> 12,499<sup>,00</sup> TL </span>
                  <span> 10,989<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-s20-ultra-128gb-gri-akilli-telefon-g988b"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %12 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-note-10-256gb-ay-tozu-grisi-akilli-telefon-n970"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-note10plus-ay-tozu-grisi-02_e3sqk2_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-note-10-256gb-ay-tozu-grisi-akilli-telefon-n970"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy Note 10 256GB Ay Tozu Grisi Akıllı Telefon (N970)"
                  >Samsung Galaxy Note 10 256GB Ay Tozu Grisi Akıllı...</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-note-10-256gb-ay-tozu-grisi-akilli-telefon-n970"
                  class="price"
                >
                  <span> 7,199<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-note-10-256gb-ay-tozu-grisi-akilli-telefon-n970"
                class="rating"
              >
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

                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-s20-plus-128gb-mavi-akilli-telefon-g985f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-s20-plus_r1g8mm_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-s20-plus-128gb-mavi-akilli-telefon-g985f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy S20 Plus 128GB Mavi Akıllı Telefon (G985F) "
                  >Samsung Galaxy S20 Plus 128GB Mavi Akıllı Telefon...</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-s20-plus-128gb-mavi-akilli-telefon-g985f"
                  class="price"
                >
                  <span class="old-price"> 9,299<sup>,00</sup> TL </span>
                  <span> 7,969<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-s20-plus-128gb-mavi-akilli-telefon-g985f"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %14 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-s20-plus-128gb-gri-akilli-telefon-g985f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-s20-plus-gri_f3g1kz_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-s20-plus-128gb-gri-akilli-telefon-g985f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy S20 Plus 128GB Gri Akıllı Telefon (G985F)"
                  >Samsung Galaxy S20 Plus 128GB Gri Akıllı Telefon...</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-s20-plus-128gb-gri-akilli-telefon-g985f"
                  class="price"
                >
                  <span class="old-price"> 9,299<sup>,00</sup> TL </span>
                  <span> 7,969<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-s20-plus-128gb-gri-akilli-telefon-g985f"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %14 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a href="/huawei-p40-pro-256gb-siyah-akilli-telefon" class="image">
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/huawei-p40-pro-03_a3zse1_fb51kj_p9qrm4_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/huawei-p40-pro-256gb-siyah-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Huawei P40 Pro 256GB Siyah Akıllı Telefon"
                  >Huawei P40 Pro 256GB Siyah Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/huawei-p40-pro-256gb-siyah-akilli-telefon"
                  class="price"
                >
                  <span> 9,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/huawei-p40-pro-256gb-siyah-akilli-telefon"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/huawei-p-smart-s-128gb-siyah-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/huawei-p-smart-s-01_c2haf5_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/huawei-p-smart-s-128gb-siyah-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Huawei P Smart S 128GB Siyah Akıllı Telefon"
                  >Huawei P Smart S 128GB Siyah Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/huawei-p-smart-s-128gb-siyah-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 3,499<sup>,00</sup> TL </span>
                  <span> 2,899<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/huawei-p-smart-s-128gb-siyah-akilli-telefon"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %17 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a href="/huawei-p40-pro-256gb-beyaz-akilli-telefon" class="image">
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/huawei-p40-pro-beyaz_wz95fi_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/huawei-p40-pro-256gb-beyaz-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Huawei P40 Pro 256GB Beyaz Akıllı Telefon"
                  >Huawei P40 Pro 256GB Beyaz Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/huawei-p40-pro-256gb-beyaz-akilli-telefon"
                  class="price"
                >
                  <span> 9,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/huawei-p40-pro-256gb-beyaz-akilli-telefon"
                class="rating"
              >
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

                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a href="/huawei-p40-128gb-beyaz-akilli-telefon" class="image">
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/huawei-p40-beyaz_me98hp_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/huawei-p40-128gb-beyaz-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Huawei P40 128GB Beyaz Akıllı Telefon"
                  >Huawei P40 128GB Beyaz Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a href="/huawei-p40-128gb-beyaz-akilli-telefon" class="price">
                  <span> 6,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a href="/huawei-p40-128gb-beyaz-akilli-telefon" class="rating">
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

                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-redmi-note-8-pro-128gb-gri-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/redmi-note-8-pro-gri-01_q1l2qe_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-redmi-note-8-pro-128gb-gri-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Redmi Note 8 Pro 128GB Gri Akıllı Telefon "
                  >Xiaomi Redmi Note 8 Pro 128GB Gri Akıllı Telefon
                </a>
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-redmi-note-8-pro-128gb-gri-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 3,899<sup>,00</sup> TL </span>
                  <span> 3,549<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-redmi-note-8-pro-128gb-gri-akilli-telefon"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %9 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung/samsung-galaxy-a21s-64gb-siyah-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/samsung-galaxy-a21s-64gb-cift-sim-siyah1_z0ste7_250.jpeg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung/samsung-galaxy-a21s-64gb-siyah-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text=" Samsung Galaxy A21s 64GB Siyah Akıllı Telefon (A217F)"
                >
                  Samsung Galaxy A21s 64GB Siyah Akıllı Telefon (A217F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung/samsung-galaxy-a21s-64gb-siyah-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 2,999<sup>,00</sup> TL </span>
                  <span> 2,799<sup>,00</sup> TL </span>
                </a>
                <a
                  href="/samsung/samsung-galaxy-a21s-64gb-siyah-akilli-telefon"
                  class="campaign-info"
                >
                  574<sup>,83</sup> TL 'den başlayan taksitlerle
                </a>
              </div>
              <a
                href="/samsung/samsung-galaxy-a21s-64gb-siyah-akilli-telefon"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %7 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-redmi-note-8-pro-64gb-gri-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/redmi-note-8-pro-gri-01_w9b1nt_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-redmi-note-8-pro-64gb-gri-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Redmi Note 8 Pro 64GB Gri Akıllı Telefon"
                  >Xiaomi Redmi Note 8 Pro 64GB Gri Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-redmi-note-8-pro-64gb-gri-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 3,599<sup>,00</sup> TL </span>
                  <span> 3,259<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-redmi-note-8-pro-64gb-gri-akilli-telefon"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %9 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-redmi-note-8-pro-64gb-yesil-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/redmi-note-8-pro-yesil-01_y5pmf1_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-redmi-note-8-pro-64gb-yesil-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Redmi Note 8 Pro 64GB Yeşil Akıllı Telefon"
                  >Xiaomi Redmi Note 8 Pro 64GB Yeşil Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-redmi-note-8-pro-64gb-yesil-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 3,599<sup>,00</sup> TL </span>
                  <span> 3,259<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-redmi-note-8-pro-64gb-yesil-akilli-telefon"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %9 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-redmi-note-8-pro-64gb-mavi-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-8-pro-mavi_q6wjx4_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-redmi-note-8-pro-64gb-mavi-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Redmi Note 8 Pro 64GB Mavi Akıllı Telefon"
                  >Xiaomi Redmi Note 8 Pro 64GB Mavi Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-redmi-note-8-pro-64gb-mavi-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 3,599<sup>,00</sup> TL </span>
                  <span> 3,259<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-redmi-note-8-pro-64gb-mavi-akilli-telefon"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %9 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a href="/tcl-10l-64gb-beyaz-akilli-telefon-t770h" class="image">
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/tcl-10l-mavi-telefon-01_p3l2kn_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/tcl-10l-64gb-beyaz-akilli-telefon-t770h"
                  class="name multiline-ellipsis"
                  data-text="Tcl 10L 64GB Beyaz Akıllı Telefon (T770H)"
                  >Tcl 10L 64GB Beyaz Akıllı Telefon (T770H)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/tcl-10l-64gb-beyaz-akilli-telefon-t770h"
                  class="price"
                >
                  <span> 2,849<sup>,00</sup> TL </span>
                </a>
                <a
                  href="/tcl-10l-64gb-beyaz-akilli-telefon-t770h"
                  class="campaign-info"
                >
                  516<sup>,50</sup> TL 'den başlayan taksitlerle
                </a>
              </div>
              <a href="/tcl-10l-64gb-beyaz-akilli-telefon-t770h" class="rating">
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

                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-redmi-note-8-pro-128gb-yesil-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/redmi-note-8-pro-yesil-01_y5pmf1_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-redmi-note-8-pro-128gb-yesil-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Redmi Note 8 Pro 128GB Yeşil Akıllı Telefon"
                  >Xiaomi Redmi Note 8 Pro 128GB Yeşil Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-redmi-note-8-pro-128gb-yesil-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 3,899<sup>,00</sup> TL </span>
                  <span> 3,549<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-redmi-note-8-pro-128gb-yesil-akilli-telefon"
                class="rating"
              >
                <div class="stars" data-rating="4">
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

                <div class="discount-info vcenter">
                  <span> %9 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-s20-ultra-128gb-gri-akilli-telefon-g988b-2"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/sm-galaxy-s20-ultra-siyah_pq8m5k_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-s20-ultra-128gb-gri-akilli-telefon-g988b-2"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy S20 Ultra 128GB Siyah Akıllı Telefon (G988B) "
                  >Samsung Galaxy S20 Ultra 128GB Siyah Akıllı Telefon...</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-s20-ultra-128gb-gri-akilli-telefon-g988b-2"
                  class="price"
                >
                  <span class="old-price"> 12,499<sup>,00</sup> TL </span>
                  <span> 10,989<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-s20-ultra-128gb-gri-akilli-telefon-g988b-2"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %12 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-s20-128gb-mavi-akilli-telefon-g985f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-s20_y3k5mx_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-s20-128gb-mavi-akilli-telefon-g985f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy S20 128GB Mavi Akıllı Telefon (G980F)"
                  >Samsung Galaxy S20 128GB Mavi Akıllı Telefon (G980F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-s20-128gb-mavi-akilli-telefon-g985f"
                  class="price"
                >
                  <span class="old-price"> 7,429<sup>,00</sup> TL </span>
                  <span> 6,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-s20-128gb-mavi-akilli-telefon-g985f"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %6 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-s20-128gb-gri-akilli-telefon-g985f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-s20-gri-01_k4m6cr_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-s20-128gb-gri-akilli-telefon-g985f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy S20 128GB Gri Akıllı Telefon (G980F)"
                  >Samsung Galaxy S20 128GB Gri Akıllı Telefon (G980F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-s20-128gb-gri-akilli-telefon-g985f"
                  class="price"
                >
                  <span class="old-price"> 7,429<sup>,00</sup> TL </span>
                  <span> 6,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-s20-128gb-gri-akilli-telefon-g985f"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %6 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-s20-128gb-pembe-akilli-telefon-g985f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-s20-pembe-01_rq3r9w_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-s20-128gb-pembe-akilli-telefon-g985f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy S20 128GB Pembe Akıllı Telefon (G980F)"
                  >Samsung Galaxy S20 128GB Pembe Akıllı Telefon (G980F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-s20-128gb-pembe-akilli-telefon-g985f"
                  class="price"
                >
                  <span class="old-price"> 7,429<sup>,00</sup> TL </span>
                  <span> 6,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-s20-128gb-pembe-akilli-telefon-g985f"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %6 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-redmi-note-9-pro-128gb-yesil-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-pro-04_lj0s4t_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-redmi-note-9-pro-128gb-yesil-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Redmi Note 9 Pro 128GB Yeşil Akıllı Telefon"
                  >Xiaomi Redmi Note 9 Pro 128GB Yeşil Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-redmi-note-9-pro-128gb-yesil-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 4,498<sup>,00</sup> TL </span>
                  <span> 3,699<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-redmi-note-9-pro-128gb-yesil-akilli-telefon"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %18 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/realme-6-128gb-yildiz-beyazi-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/realme-6-yildiz-beyazi_z9y1fk_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/realme-6-128gb-yildiz-beyazi-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Realme 6 128GB Yıldız Beyazı Akıllı Telefon"
                  >Realme 6 128GB Yıldız Beyazı Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/realme-6-128gb-yildiz-beyazi-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 3,499<sup>,00</sup> TL </span>
                  <span> 2,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/realme-6-128gb-yildiz-beyazi-akilli-telefon"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %14 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-a31-128gb-siyah-akilli-telefon-a315f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a31-siyah_as4c3b_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-a31-128gb-siyah-akilli-telefon-a315f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy A31 128GB Siyah Akıllı Telefon (A315F)"
                  >Samsung Galaxy A31 128GB Siyah Akıllı Telefon (A315F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-a31-128gb-siyah-akilli-telefon-a315f"
                  class="price"
                >
                  <span class="old-price"> 3,599<sup>,00</sup> TL </span>
                  <span> 3,099<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-a31-128gb-siyah-akilli-telefon-a315f"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %14 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-a31-128gb-beyaz-akilli-telefon-a315f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a31-beyaz_f2mwo3_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-a31-128gb-beyaz-akilli-telefon-a315f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy A31 128GB Beyaz Akıllı Telefon (A315F)"
                  >Samsung Galaxy A31 128GB Beyaz Akıllı Telefon (A315F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-a31-128gb-beyaz-akilli-telefon-a315f"
                  class="price"
                >
                  <span class="old-price"> 3,599<sup>,00</sup> TL </span>
                  <span> 3,099<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-a31-128gb-beyaz-akilli-telefon-a315f"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %14 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-a21s-64gb-mavi-akilli-telefon-a215f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a21s_ww84bq_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-a21s-64gb-mavi-akilli-telefon-a215f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy A21s 64GB Mavi Akıllı Telefon (A217F)"
                  >Samsung Galaxy A21s 64GB Mavi Akıllı Telefon (A217F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-a21s-64gb-mavi-akilli-telefon-a215f"
                  class="price"
                >
                  <span class="old-price"> 2,999<sup>,00</sup> TL </span>
                  <span> 2,799<sup>,00</sup> TL </span>
                </a>
                <a
                  href="/samsung-galaxy-a21s-64gb-mavi-akilli-telefon-a215f"
                  class="campaign-info"
                >
                  574<sup>,83</sup> TL 'den başlayan taksitlerle
                </a>
              </div>
              <a
                href="/samsung-galaxy-a21s-64gb-mavi-akilli-telefon-a215f"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %7 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-a31-128gb-mavi-akilli-telefon-a315f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a31-mavi-01_r8b2kq_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-a31-128gb-mavi-akilli-telefon-a315f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy A31 128GB Mavi Akıllı Telefon (A315F)"
                  >Samsung Galaxy A31 128GB Mavi Akıllı Telefon (A315F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-a31-128gb-mavi-akilli-telefon-a315f"
                  class="price"
                >
                  <span class="old-price"> 3,599<sup>,00</sup> TL </span>
                  <span> 3,099<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-a31-128gb-mavi-akilli-telefon-a315f"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %14 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-z-flip-256gb-parlak-siyah-akilli-telefon-f700f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-z-flip-parlak-siyah_kw82cf_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-z-flip-256gb-parlak-siyah-akilli-telefon-f700f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy Z Flip 256GB Parlak Siyah Akıllı Telefon (F700F)"
                  >Samsung Galaxy Z Flip 256GB Parlak Siyah Akıllı Telefon...</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-z-flip-256gb-parlak-siyah-akilli-telefon-f700f"
                  class="price"
                >
                  <span class="old-price"> 14,199<sup>,00</sup> TL </span>
                  <span> 12,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-z-flip-256gb-parlak-siyah-akilli-telefon-f700f"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %8 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-z-flip-256gb-parlak-mor-akilli-telefon-f700f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-z-flip-parlak-mor-01_c8j3ww_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-z-flip-256gb-parlak-mor-akilli-telefon-f700f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy Z Flip 256GB Parlak Mor Akıllı Telefon (F700F)"
                  >Samsung Galaxy Z Flip 256GB Parlak Mor Akıllı Telefon...</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-z-flip-256gb-parlak-mor-akilli-telefon-f700f"
                  class="price"
                >
                  <span class="old-price"> 14,199<sup>,00</sup> TL </span>
                  <span> 12,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/samsung-galaxy-z-flip-256gb-parlak-mor-akilli-telefon-f700f"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %8 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-a11-32gb-siyah-akilli-telefon-a115f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a11-siyah_pe2w0f_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-a11-32gb-siyah-akilli-telefon-a115f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy A11 32GB Siyah Akıllı Telefon (A115F)"
                  >Samsung Galaxy A11 32GB Siyah Akıllı Telefon (A115F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-a11-32gb-siyah-akilli-telefon-a115f"
                  class="price"
                >
                  <span class="old-price"> 2,799<sup>,00</sup> TL </span>
                  <span> 2,499<sup>,00</sup> TL </span>
                </a>
                <a
                  href="/samsung-galaxy-a11-32gb-siyah-akilli-telefon-a115f"
                  class="campaign-info"
                >
                  491<sup>,50</sup> TL 'den başlayan taksitlerle
                </a>
              </div>
              <a
                href="/samsung-galaxy-a11-32gb-siyah-akilli-telefon-a115f"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %11 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-a11-32gb-mavi-akilli-telefon-a115f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a11-mavi_f0bai3_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-a11-32gb-mavi-akilli-telefon-a115f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy A11 32GB Mavi Akıllı Telefon (A115F)"
                  >Samsung Galaxy A11 32GB Mavi Akıllı Telefon (A115F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-a11-32gb-mavi-akilli-telefon-a115f"
                  class="price"
                >
                  <span class="old-price"> 2,799<sup>,00</sup> TL </span>
                  <span> 2,499<sup>,00</sup> TL </span>
                </a>
                <a
                  href="/samsung-galaxy-a11-32gb-mavi-akilli-telefon-a115f"
                  class="campaign-info"
                >
                  491<sup>,50</sup> TL 'den başlayan taksitlerle
                </a>
              </div>
              <a
                href="/samsung-galaxy-a11-32gb-mavi-akilli-telefon-a115f"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %11 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/samsung-galaxy-a11-32gb-beyaz-akilli-telefon-a115f"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a11-beyaz_mw6e4l_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-galaxy-a11-32gb-beyaz-akilli-telefon-a115f"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy A11 32GB Beyaz Akıllı Telefon (A115F)"
                  >Samsung Galaxy A11 32GB Beyaz Akıllı Telefon (A115F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/samsung-galaxy-a11-32gb-beyaz-akilli-telefon-a115f"
                  class="price"
                >
                  <span class="old-price"> 2,799<sup>,00</sup> TL </span>
                  <span> 2,499<sup>,00</sup> TL </span>
                </a>
                <a
                  href="/samsung-galaxy-a11-32gb-beyaz-akilli-telefon-a115f"
                  class="campaign-info"
                >
                  491<sup>,50</sup> TL 'den başlayan taksitlerle
                </a>
              </div>
              <a
                href="/samsung-galaxy-a11-32gb-beyaz-akilli-telefon-a115f"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %11 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a href="/oppo-reno-3-128gb-siyahi-akilli-telefon" class="image">
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/oppo-reno-3-128-gb-siyah_tc5w3w_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/oppo-reno-3-128gb-siyahi-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Oppo Reno 3 128GB Siyahı Akıllı Telefon"
                  >Oppo Reno 3 128GB Siyahı Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/oppo-reno-3-128gb-siyahi-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 3,999<sup>,00</sup> TL </span>
                  <span> 3,599<sup>,00</sup> TL </span>
                </a>
              </div>
              <a href="/oppo-reno-3-128gb-siyahi-akilli-telefon" class="rating">
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

                <div class="discount-info vcenter">
                  <span> %10 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a href="/oppo-reno-3-128gb-mavi-akilli-telefon" class="image">
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/oppo-reno-3-128-gb-mavi_tg2x8d_co20fy_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/oppo-reno-3-128gb-mavi-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Oppo Reno 3 128GB Mavi Akıllı Telefon"
                  >Oppo Reno 3 128GB Mavi Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a href="/oppo-reno-3-128gb-mavi-akilli-telefon" class="price">
                  <span class="old-price"> 3,999<sup>,00</sup> TL </span>
                  <span> 3,599<sup>,00</sup> TL </span>
                </a>
              </div>
              <a href="/oppo-reno-3-128gb-mavi-akilli-telefon" class="rating">
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

                <div class="discount-info vcenter">
                  <span> %10 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a href="/samsung-a217f-galaxy-a21s-beyaz" class="image">
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/samsung-galaxy-a21s-64gb-cift-sim-beyaz1_qm02do_250.jpeg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/samsung-a217f-galaxy-a21s-beyaz"
                  class="name multiline-ellipsis"
                  data-text="Samsung Galaxy A21s 64GB Beyaz Akıllı Telefon (A217F)"
                  >Samsung Galaxy A21s 64GB Beyaz Akıllı Telefon (A217F)</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a href="/samsung-a217f-galaxy-a21s-beyaz" class="price">
                  <span class="old-price"> 2,999<sup>,00</sup> TL </span>
                  <span> 2,799<sup>,00</sup> TL </span>
                </a>
                <a
                  href="/samsung-a217f-galaxy-a21s-beyaz"
                  class="campaign-info"
                >
                  574<sup>,83</sup> TL 'den başlayan taksitlerle
                </a>
              </div>
              <a href="/samsung-a217f-galaxy-a21s-beyaz" class="rating">
                <div class="stars" data-rating="4">
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

                <div class="discount-info vcenter">
                  <span> %7 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-redmi-note-9-64gb-yesil-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-64gb_fm12ma_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-redmi-note-9-64gb-yesil-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Redmi Note 9 64GB Yeşil Akıllı Telefon"
                  >Xiaomi Redmi Note 9 64GB Yeşil Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-redmi-note-9-64gb-yesil-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 3,399<sup>,00</sup> TL </span>
                  <span> 2,969<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-redmi-note-9-64gb-yesil-akilli-telefon"
                class="rating"
              >
                <div class="stars" data-rating="5">
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

                <div class="discount-info vcenter">
                  <span> %13 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-redmi-note-9-64gb-gri-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-redmi-note-9-64gb_gq75fy_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-redmi-note-9-64gb-gri-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Redmi Note 9 64GB Gri Akıllı Telefon"
                  >Xiaomi Redmi Note 9 64GB Gri Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-redmi-note-9-64gb-gri-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 3,399<sup>,00</sup> TL </span>
                  <span> 2,969<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-redmi-note-9-64gb-gri-akilli-telefon"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %13 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-mi-note-10-lite-64gb-siyah-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-mi-note-10-lite-64gb_ai30sx_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-mi-note-10-lite-64gb-siyah-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Mi Note 10 Lite 64GB Siyah Akıllı Telefon"
                  >Xiaomi Mi Note 10 Lite 64GB Siyah Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-mi-note-10-lite-64gb-siyah-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 4,399<sup>,00</sup> TL </span>
                  <span> 3,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-mi-note-10-lite-64gb-siyah-akilli-telefon"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %9 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-mi-note-10-lite-64gb-mor-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-mi-note-10-lite-64gb-mor-02_q0f5po_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-mi-note-10-lite-64gb-mor-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Mi Note 10 Lite 64GB Mor Akıllı Telefon"
                  >Xiaomi Mi Note 10 Lite 64GB Mor Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-mi-note-10-lite-64gb-mor-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 4,399<sup>,00</sup> TL </span>
                  <span> 3,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-mi-note-10-lite-64gb-mor-akilli-telefon"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %9 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
          <div class="product">
            <a
              href="/xiaomi-mi-note-10-lite-64gb-beyaz-akilli-telefon"
              class="image"
            >
              <img
                src="https://cdn.evkur.com.tr/c/Product/thumbs/xiaomi-mi-note-10-lite-64gb-beyaz-02_w2gyq5_250.jpg"
                alt=""
              />
            </a>
            <div class="product-content">
              <h2>
                <a
                  href="/xiaomi-mi-note-10-lite-64gb-beyaz-akilli-telefon"
                  class="name multiline-ellipsis"
                  data-text="Xiaomi Mi Note 10 Lite 64GB Beyaz Akıllı Telefon"
                  >Xiaomi Mi Note 10 Lite 64GB Beyaz Akıllı Telefon</a
                >
              </h2>
              <div class="product-mobile-wrapper">
                <a
                  href="/xiaomi-mi-note-10-lite-64gb-beyaz-akilli-telefon"
                  class="price"
                >
                  <span class="old-price"> 4,399<sup>,00</sup> TL </span>
                  <span> 3,999<sup>,00</sup> TL </span>
                </a>
              </div>
              <a
                href="/xiaomi-mi-note-10-lite-64gb-beyaz-akilli-telefon"
                class="rating"
              >
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

                <div class="discount-info vcenter">
                  <span> %9 İNDİRİM </span>
                </div>
                <div class="button red">
                  <span>ÜRÜNE GİT</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="paging">
          <a href="javascript:void(0)" class="vcenter active">
            <span> 1 </span>
          </a>
          <a href="/cep-telefonlari?ajax=true&amp;pageNumber=2" class="vcenter">
            <span> 2 </span>
          </a>
          <a href="/cep-telefonlari?ajax=true&amp;pageNumber=3" class="vcenter">
            <span> 3 </span>
          </a>
          <a href="/cep-telefonlari?ajax=true&amp;pageNumber=2" class="vcenter">
            <span> &gt; </span>
          </a>
          <a href="/cep-telefonlari?ajax=true&amp;pageNumber=3" class="vcenter">
            <span> &gt;&gt; </span>
          </a>
        </div>
        <a href="javascript:void(0)" class="filter-icon mobile"> FİLTRELE </a>
        <div class="category-text">
          <div class="category-text-title">
            Uygun Fiyatlı ve Kaliteli Cep Telefonları
          </div>
          <div class="category-text-summary">
            <h2
              style="
                text-align: justify;
                font-size: 12px;
                margin-top: 6px !important;
              "
            >
              <strong>Cep Telefonu</strong>
            </h2>
            <p style="text-align: justify">
              Cep teledonları, en çok kullandığımız teknolojik cihazlardan
              biridir. Gittiğimiz her yere götürebildiğimiz bu akıllı cihazlar
              iletişim kurmamızı çok daha kolaylaştırdığı ve bir yere bağlı
              olmaktan kurtardığı için bu küçük alete olan ilgi giderek
              artmaktadır. Yapılan araştırmalardan edinilen istatistiki
              sonuçlara göre düya nüfusunun büyük bir kısmı cep telefonu
              kullanmaktadır.
            </p>
          </div>
          <div class="category-text-all">
            <h2
              style="
                text-align: justify;
                font-size: 12px;
                margin-top: 6px !important;
              "
            >
              <strong>Cep Telefonu</strong>
            </h2>
            <p style="text-align: justify">
              Cep teledonları, en çok kullandığımız teknolojik cihazlardan
              biridir. Gittiğimiz her yere götürebildiğimiz bu akıllı cihazlar
              iletişim kurmamızı çok daha kolaylaştırdığı ve bir yere bağlı
              olmaktan kurtardığı için bu küçük alete olan ilgi giderek
              artmaktadır. Yapılan araştırmalardan edinilen istatistiki
              sonuçlara göre düya nüfusunun büyük bir kısmı cep telefonu
              kullanmaktadır. Sayıları milyarları bulan cep telefonları, sektöre
              giren üretici firma sayısının artmasıyla model ve çeşt bakımından
              zenginleşmiş ve küresel ölçülerde dev bir pazarın oluşmasını
              sağlamıştır. Bu küresel pazardaki telefon modeli o kadar çoktur ki
              isteyen herkes kendi bütçesine göre bir telefon modeli
              bulabilmektedir. Satın almak için bu kadar çok çeşidin olması
              karar vermenizi biraz zorlaştırabilir.
              <span style="text-decoration: underline"
                >Cep telefonu satın alırken dikkat etmeniz gereken önemli birkaç
                detay var.</span
              >
              Öncelikle, ihtiyacınız ne ve daha çok ne için kullanacaksınız?
              Eğer bu sorularınızın cevaplarını bilirseniz, ihtiyacınız olan cep
              telefonunu daha kolay belirleyip satın alabilirsiniz. Sadece
              ihtiyacınızı belirlemeniz yeterli. Uygun modeli belirledikten
              sonra <strong>taksitle cep telefonu almak</strong> için
              başvurunuzu kolayca yapabilirsiniz.
            </p>
            <h3 style="text-align: justify; font-size: 12px">
              <strong>Cep Telefonu İşletim Sistemi</strong>
            </h3>
            <p style="text-align: justify">
              Türkiye genellemesine göre en çok kullanılan, tercih edilen cep
              telefonu işletim sistemi, "Android, iOS"tur. Sizin için en uygun
              cep telefonu modellerini www.evkur.com.tr'de bulabileceksiniz.
            </p>
            <p style="text-align: justify; font-size: 12px">
              <strong>Cep Telefonu Alırken İşletim Sistemi Tercihi</strong>
            </p>
            <p style="text-align: justify">
              <strong>Android İşletim Sistemi :</strong> Google ve Open Handset
              Alliance tarafından, mobil cihazlar için geliştirilmekte olan,
              Linux tabanlı özgür ve ücretsiz bir işletim sistemidir. Genel
              olarak, kullanımı ve tasarımının kolay olması nedeniyle oldukça
              tercih edilen bir işletim sistemidir. Türkiye genelinde çoğunluk
              olarak tercih edildiğini söyleyebiliriz. Ekstra uygulama yüklemek,
              telefonunuzda var olan fotoğraf, müzik gibi dosyalara bilgisayar
              üzerinden erişim daha kolaydır.
            </p>
            <p style="text-align: justify">
              <strong>iOS İşletim Sistemi :</strong> Sadece Apple ürünleri için
              geçerli bir işletim sistemidir. Apple için uygulamalara kendi
              uygulama marketi olan "App Store" üzerinden erişim sağlanabilir.
              Bazı uygulamaları için ödeme alınabilmektedir. iOS işletim
              sistemli ürününüzü bilgisayara bağladığınızda da ürününüzdeki
              içeriklere direkt erişim sağlamanız da biraz zor olabilmektedir.
              Kendi masaüstü tasarımı olan Itunes'u kullanmanız gerekmektedir.
            </p>
            <h3 style="text-align: justify; font-size: 12px">
              <strong>Cep Telefonu Markaları</strong>
            </h3>
            <p style="text-align: justify">
              Samsung, LG, HUAWEI, OPPO, XIAOMI, Alcatel, REALME, TCL ve daha
              birçok marka mevcut. Bunlar, cep telefonu alırken en çok tercih
              edilen ve göz önünde bulundurulan markalardır. Telefon alışverişi
              yaparken herhangi bir tercih önceliğiniz yok ise güvenilir bir
              marka olmasına dikkat edin.
              <strong>Cep telefonu fiyatları</strong> seçilen modele göre bazen
              yüksek olabilmekte. Bozulduğu zaman yenisini almak
              istemeyebilirsiniz. Bu yüzden yaşadığınız yerde yetkili servisinin
              olup olmadığını araştırın. EVKUR'dan dünya markası
              <span style="text-decoration: underline"
                >cep telefonlarını orijinal resmi ürün garantisi ile</span
              >
              satın alabilirsiniz. <strong>Taksitle cep telefonu</strong> satın
              almak için sipariş vermeniz yeterli.
            </p>
            <p style="text-align: justify">
              <strong>Kullanıcılar İçin Cep Telefonu Markaları</strong>
            </p>
            <p style="text-align: justify">
              Günümüzde kullanıcılar ikiye ayrıldı diyebiliriz. iOS ve Android
              sevenler. iOS'a alıştıysanız android kullanmanız biraz zor
              olabilir, Android'e alıştıysanız iOS'u kullanırken
              zorlanabilirsiniz. İki işletim sistemi için de oldukçe geniş bir
              geliştirici kitlesi blunmaktadır. Telefonunuz ister Android olsun
              isterse iOS olsun zevkinize ve ihtiyacınıza göre bir uygulama
              mutlaka bulabiliyorsunuz. Sizin zevkinize ve kullanım
              alışkanlıklarınıza uygun olan bir işletim sistemini ve bu sistemle
              çalışan bir telefonu tercih etmeniz daha doğru olacaktır. Hem
              sizin için hem de telefonunuzu uzun süre kullanabilmeniz için
              önemli.
            </p>
            <h3 style="text-align: justify; font-size: 12px">
              <strong>Cep Telefonunun Ömrünü Uzatma</strong>
            </h3>
            <p style="text-align: justify">
              Cep telefonunuzu dikkatli ve bilinçli kullanmanız hizmet süresini
              uzatacaktır. Hijyenik kullanımı, bataryasının uzun ömürlü olması,
              sağında solunda herhangi bir çizik veya zararın olmaması için
              elinizden geleni yaparsanız, telefonunuzu daha uzun süre
              kullanabilirsiniz.Cep telefonunuzun temizliği için özel olarak
              tasarlanmış bezlerden temin satın alabilirsiniz. Mutlaka,
              telefoncularda bulunabilen ürünlerdir.
            </p>
            <p style="text-align: justify">
              Bataryasının daha dayanıklı olması içinde telefonu satın
              aldığınızda kutudan çıktığı haliyle kullanmalı, içinde var olan
              şarjı tüketip, tamamen sıfırlandığında şarja takmalısınız. Sonraki
              kullanımlarınızda da bunu göz önünde bulundurmalısınız. Bataryada
              depolanan enerji sıfırlanmadan tekrar şarja bağlanmamalı ve
              şarjdayken telefon kullanılmamalıdır. Bu bataryanızın ömrünü
              uzatacaktır.
            </p>
            <a href="javascript:void(0)" class="see-all">Özeti Göster</a>
          </div>
        </div>
        <div class="seg-reco-wrapper seg-clear">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div class="container seg-rec-2" id="kategori2">
            <h2>Merhaba, İlgilenebileceğiniz Diğer Ürünler</h2>
            <div class="slider owl-carousel owl-theme owl-loaded owl-drag">
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="
                    transform: translate3d(-1056px, 0px, 0px);
                    transition: all 0s ease 0s;
                    width: 4224px;
                  "
                >
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/samsung-galaxy-a31-128gb-siyah-akilli-telefon-a315f?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=206256&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %13
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a31-siyah_as4c3b_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Samsung Galaxy A31 128GB Siyah Akıllı Telefon
                            (A315F)
                          </div>

                          <div class="price">
                            <span> 3,099<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,599<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/hometech-alfa-intel-celeron-n33504-gb64-gbssd14-hdwin10-?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=215206&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %20
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/alfa-450c-1_w4tha3_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Hometech ALFA-450C Intel Celeron N3350 1.1GHz
                            İşlemci 4Gb Ram 64Gb Ssd 14" Ekran Windows 10
                            İşletim Sistemli Gümüş Dizüstü Bilgisayar
                          </div>

                          <div class="price">
                            <span> 2,399<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,999<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/samsung/samsung-galaxy-a21s-64gb-siyah-akilli-telefon?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=206715&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %6
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/samsung-galaxy-a21s-64gb-cift-sim-siyah1_z0ste7_500.jpeg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Samsung Galaxy A21s 64GB Siyah Akıllı Telefon
                            (A217F)
                          </div>

                          <div class="price">
                            <span> 2,799<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,999<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/580-m2-ekostar-hali11?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=198398&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/301a8135-1920x1920_f5nte0_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Merinos 200x290 cm Ekostar Halı 32697-30
                          </div>
                          <div class="price">
                            <span> 529<sup>,00</sup> TL </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/realme-6-128gb-yildiz-beyazi-akilli-telefon?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=206001&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %14
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/realme-6-yildiz-beyazi_z9y1fk_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Realme 6 128GB Yıldız Beyazı Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 2,999<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,499<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/368-m2-praga-hali4?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=198328&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %50
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/19084-012-praga-1920x1920_b7rqj1_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Merinos Elegance 160x230 cm Praga Halı 19084-12
                          </div>

                          <div class="price">
                            <span> 1,030<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,060<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/trident-a23-max-64gb-mavi-akilli-telefon?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=214262&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %8
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a23-blue_k4t3hb_y3k9em_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a23-blue_k4t3hb_y3k9em_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Trident A23 Max 64GB Mavi Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 2,099<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,299<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/408-m2-selectum-hali4?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=199944&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/19042-035-selectum-1920_ed7z9h_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/19042-035-selectum-1920_ed7z9h_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Merinos Elegance 170x240 cm Selectum Halı 19042-35
                          </div>
                          <div class="price">
                            <span> 1,142<sup>,00</sup> TL </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/samsung-galaxy-a11-32gb-siyah-akilli-telefon-a115f?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=206517&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %10
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a11-siyah_pe2w0f_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a11-siyah_pe2w0f_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Samsung Galaxy A11 32GB Siyah Akıllı Telefon (A115F)
                          </div>

                          <div class="price">
                            <span> 2,499<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,799<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/merinos-elegance-160x230-cm-creante-hali-19143-96?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=198346&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %50
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/19143-096-creante-1920x1920_sy3b9n.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/19143-096-creante-1920x1920_sy3b9n.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Merinos Elegance 160x230 cm Creante Halı 19143-96
                          </div>

                          <div class="price">
                            <span> 1,030<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,062<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/trident-a53-pro-128gb-beyaz-akilli-telefon?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=214352&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %10
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a53-pro-beyaz_bt89ew_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a53-pro-beyaz_bt89ew_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Trident A53 Pro 128GB Beyaz Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 2,699<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,999<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/new-vizyon-deluks-takim-?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=168420&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/aa_c5k9nr_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            New Vizyon Deluks Koltuk Takımı
                          </div>
                          <div class="price">
                            <span> 6,749<sup>,00</sup> TL </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/samsung-galaxy-a31-128gb-siyah-akilli-telefon-a315f?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=206256&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %13
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a31-siyah_as4c3b_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Samsung Galaxy A31 128GB Siyah Akıllı Telefon
                            (A315F)
                          </div>

                          <div class="price">
                            <span> 3,099<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,599<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/hometech-alfa-intel-celeron-n33504-gb64-gbssd14-hdwin10-?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=215206&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %20
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/alfa-450c-1_w4tha3_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Hometech ALFA-450C Intel Celeron N3350 1.1GHz
                            İşlemci 4Gb Ram 64Gb Ssd 14" Ekran Windows 10
                            İşletim Sistemli Gümüş Dizüstü Bilgisayar
                          </div>

                          <div class="price">
                            <span> 2,399<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,999<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/samsung/samsung-galaxy-a21s-64gb-siyah-akilli-telefon?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=206715&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %6
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/samsung-galaxy-a21s-64gb-cift-sim-siyah1_z0ste7_500.jpeg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Samsung Galaxy A21s 64GB Siyah Akıllı Telefon
                            (A217F)
                          </div>

                          <div class="price">
                            <span> 2,799<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,999<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/580-m2-ekostar-hali11?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=198398&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/301a8135-1920x1920_f5nte0_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Merinos 200x290 cm Ekostar Halı 32697-30
                          </div>
                          <div class="price">
                            <span> 529<sup>,00</sup> TL </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/realme-6-128gb-yildiz-beyazi-akilli-telefon?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=206001&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %14
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/realme-6-yildiz-beyazi_z9y1fk_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Realme 6 128GB Yıldız Beyazı Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 2,999<sup>,00</sup> TL </span>
                            <span class="old-price">
                              3,499<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/368-m2-praga-hali4?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=198328&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %50
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/19084-012-praga-1920x1920_b7rqj1_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Merinos Elegance 160x230 cm Praga Halı 19084-12
                          </div>

                          <div class="price">
                            <span> 1,030<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,060<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/trident-a23-max-64gb-mavi-akilli-telefon?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=214262&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %8
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a23-blue_k4t3hb_y3k9em_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a23-blue_k4t3hb_y3k9em_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Trident A23 Max 64GB Mavi Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 2,099<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,299<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/408-m2-selectum-hali4?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=199944&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/19042-035-selectum-1920_ed7z9h_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/19042-035-selectum-1920_ed7z9h_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Merinos Elegance 170x240 cm Selectum Halı 19042-35
                          </div>
                          <div class="price">
                            <span> 1,142<sup>,00</sup> TL </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/samsung-galaxy-a11-32gb-siyah-akilli-telefon-a115f?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=206517&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %10
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a11-siyah_pe2w0f_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/galaxy-a11-siyah_pe2w0f_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Samsung Galaxy A11 32GB Siyah Akıllı Telefon (A115F)
                          </div>

                          <div class="price">
                            <span> 2,499<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,799<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/merinos-elegance-160x230-cm-creante-hali-19143-96?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=198346&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %50
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/19143-096-creante-1920x1920_sy3b9n.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/19143-096-creante-1920x1920_sy3b9n.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Merinos Elegance 160x230 cm Creante Halı 19143-96
                          </div>

                          <div class="price">
                            <span> 1,030<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,062<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/trident-a53-pro-128gb-beyaz-akilli-telefon?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=214352&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <div class="discount-info vcenter">
                            <span>
                              %10
                              <br />
                              İNDİRİM
                            </span>
                          </div>

                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a53-pro-beyaz_bt89ew_500.jpg"
                            alt=""
                            src="https://cdn.evkur.com.tr/c/Product/thumbs/trident-a53-pro-beyaz_bt89ew_500.jpg"
                            style="opacity: 1"
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            Trident A53 Pro 128GB Beyaz Akıllı Telefon
                          </div>

                          <div class="price">
                            <span> 2,699<sup>,00</sup> TL </span>
                            <span class="old-price">
                              2,999<sup>,00</sup> TL
                            </span>
                          </div>

                          <div class="rating">
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
                      </a>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 166px; margin-right: 10px"
                  >
                    <div class="seg-item">
                      <a
                        href="https://www.evkur.com.tr/new-vizyon-deluks-takim-?_sgm_campaign=scn_6bc817d610d40000&amp;_sgm_source=168420&amp;_sgm_action=click"
                        class="item"
                      >
                        <div class="item-image">
                          <img
                            class="owl-lazy"
                            data-src="https://cdn.evkur.com.tr/c/Product/thumbs/aa_c5k9nr_500.jpg"
                            alt=""
                          />
                        </div>
                        <div class="item-info">
                          <div class="name multiline-ellipsis">
                            New Vizyon Deluks Koltuk Takımı
                          </div>
                          <div class="price">
                            <span> 6,749<sup>,00</sup> TL </span>
                          </div>

                          <div class="rating">
                            <div class="stars" data-rating="5">
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
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-nav">
                <button type="button" role="presentation" class="owl-prev">
                  <i class="fa fa-chevron-left"></i></button
                ><button type="button" role="presentation" class="owl-next">
                  <i class="fa fa-chevron-right"></i>
                </button>
              </div>
              <div class="owl-dots">
                <button role="button" class="owl-dot active">
                  <span></span></button
                ><button role="button" class="owl-dot"><span></span></button
                ><button role="button" class="owl-dot"><span></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


 <style>
#kategori2 .owl-next {
  background-color: unset;
}
#kategori2 .owl-prev {
  background-color: unset;
}

#kategori2 i.fa.fa-chevron-right {
  top: 175px;
  right: -15px;
  background-color: #ffffff;
  border: 2px solid;
  padding: 5px;
  border-radius: 5px;
  color: red;
  font-size: 24px;
}

#kategori2 i.fa.fa-chevron-left {
  top: 175px;
  left: -15px;
  background-color: #ffffff;
  border: 2px solid;
  padding: 5px;
  border-radius: 5px;
  color: red;
  font-size: 24px;
}
#kategori2 {
  padding-top: 20px;
}
#kategori2 .slider {
  margin-top: 0.05rem;
}
#kategori2 h2 {
  font-size: 20px !important;
  text-transform: uppercase;
  font-family: "Proxima";
  text-align: center;
  color: #555555;
}
#kategori2 .name {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

#kategori2 span.old-price {
  text-decoration: line-through;
}

#kategori2 .slider .item-info .price {
  width: auto !important;
}
#kategori2 .slider .item-info .rating {
  width: 100% !important;
  text-align: right;
}
#kategori2 .price span:not(.old-price) {
  font-size: 0.14rem;
}
#kategori2 .price span:not(.old-price) sup {
  font-size: 0.1rem;
}
#kategori2 .price span.old-price {
  font-size: 0.12rem;
}
#kategori2 .price span.old-price sup {
  font-size: 0.08rem;
}

@media only screen and (max-width: 800px) {
  #kategori2 button.owl-prev {
    margin-left: -9px;
    margin-top: -59px;
  }
  #kategori2 button.owl-next {
    margin-right: -9px;
    margin-top: -59px;
  }
  #kategori2 h2 {
    font-size: 16px !important;
    text-transform: uppercase;
    font-family: "Proxima";
    text-align: center;
    color: #555555;
  }
  #kategori2 .price span:not(.old-price) {
    font-size: 0.45rem;
  }
  #kategori2 .price span:not(.old-price) sup {
    font-size: 0.28rem;
  }
  #kategori2 .price span.old-price {
    font-size: 0.35rem;
    display: unset;
  }
  #kategori2 .price span.old-price sup {
    font-size: 0.25rem;
  }
  #kategori2 .rating {
    margin-top: 0.3rem;
  }
  #kategori2 .rating .stars {
    float: left;
  }
  #kategori2 .item-image .discount-info {
    width: 42px;
    height: 30px;
    margin-right: -28px;
  }
  #kategori2 .item-image .discount-info span {
    font-size: 9px;
  }
}
</style>