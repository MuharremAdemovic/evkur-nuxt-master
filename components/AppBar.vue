<template>
<header>
  <div
      class="container-fluid ins-container-132"
      style="background: white"
    >
  <div class="container menu-container">
    <div class="menu-items" >
      <h3
        class="menu-item"
        @mouseenter="OpenDropdown"
        @mouseleave="CloseDropdown"
      >
        <a href="/telefon"> TELEFON </a>
        <div class="sub-menu">
          <div class="col-1">
            <h4 class="sub-menu-item">
              <a href="/cep-telefonlari"> CEP TELEFONLARI </a>
              <div class="grand-sub-menu">
                <a href="/samsung-cep-telefonlari" class="grand-sub-menu-item">
                  Samsung
                </a>
                ,
                <a href="/realmi-cep-telefonlari" class="grand-sub-menu-item">
                  Realme
                </a>
                ,
                <a href="/trident-2" class="grand-sub-menu-item"> Trident </a>
                ,
                <a href="/oppo-cep-telefonlari" class="grand-sub-menu-item">
                  Oppo
                </a>
                ,
                <a href="/xiaomi-cep-telefonlari" class="grand-sub-menu-item">
                  Xiaomi
                </a>
                ,
                <a href="/huawei-cep-telefonlari" class="grand-sub-menu-item">
                  Huawei
                </a>
                ,
                <a href="/alcatel-cep-telefonlari" class="grand-sub-menu-item">
                  Alcatel
                </a>
                ,
                <a href="/tcl-cep-telefonlari" class="grand-sub-menu-item">
                  TCL
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/tasinabilir-sarj-cihazlari">
                TAŞINABİLİR ŞARJ CİHAZLARI
              </a>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/sarj-aletleri-ve-kablolar">
                ŞARJ ALETLERİ VE KABLOLAR
              </a>
              <div class="grand-sub-menu">
                <a href="/sarj-aletleri" class="grand-sub-menu-item">
                  Şarj Aletleri
                </a>
                ,
                <a href="/kablolar" class="grand-sub-menu-item"> Kablolar </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/hafiza-kartlari-2"> HAFIZA KARTLARI </a>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/gimbal-sabitleyiciler"> GİMBAL / SABİTLEYİCİLER </a>
            </h4>
          </div>
          <div class="col-2">
            <div class="sub-menu-item">
              <a href="/giyilebilir-aksesuarlar"> GİYİLEBİLİR TEKNOLOJİ </a>
              <div class="grand-sub-menu">
                <a href="/akilli-saatler" class="grand-sub-menu-item">
                  Akıllı Saatler
                </a>
                ,
                <a href="/akilli-bileklikler" class="grand-sub-menu-item">
                  Akıllı Bileklikler
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/tasinabilir-ve-bluetoothlu-hoparlorler">
                TAŞINABİLİR BLUETOOTHLU HOPARLÖRLER
              </a>
            </div>
            <div class="sub-menu-item">
              <a href="/kiliflar-ve-ekran-koruyucular">
                KILIFLAR VE EKRAN KORUYUCULAR
              </a>
              <div class="grand-sub-menu">
                <a href="/kiliflar-2" class="grand-sub-menu-item"> Kılıflar </a>
                ,
                <a href="/ekran-koruyucular-3" class="grand-sub-menu-item">
                  Ekran Koruyucular
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/kulakliklar-3"> KULAKLIKLAR </a>
              <div class="grand-sub-menu">
                <a
                  href="/kulakici-kablolu-kulakliklar"
                  class="grand-sub-menu-item"
                >
                  Kulakiçi Kablolu Kulaklıklar
                </a>
                ,
                <a
                  href="/bluetoothlu-kablosuz-kulakliklar-2"
                  class="grand-sub-menu-item"
                >
                  Bluetoothlu Kablosuz Kulaklıklar
                </a>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="sub-menu-item">
              <a href="https://www.evkur.com.tr/cep-telefonlari">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/akilli-telefonlar-400x200px_o8r0lb.png"
                />
              </a>
            </div>
            <div class="sub-menu-item">
              <a href="https://www.evkur.com.tr/giyilebilir-aksesuarlar">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/telefon-aksesuarlari-400x250px_lb1o0d.png"
                />
              </a>
            </div>
          </div>
        </div>
      </h3>
      <h3
        class="menu-item"
        @mouseenter="OpenDropdown"
        @mouseleave="CloseDropdown"
      >
        <a href="/bilgisayar"> BİLGİSAYAR </a>
        <div class="sub-menu">
          <div class="col-1">
            <h4 class="sub-menu-item">
              <a href="/dizustu-bilgisayarlar"> DİZÜSTÜ BİLGİSAYAR </a>
              <div class="grand-sub-menu">
                <a href="/notebook" class="grand-sub-menu-item"> Notebook </a>
                ,
                <a href="/oyun-bilgisayari" class="grand-sub-menu-item">
                  Gamebook
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/masaustu-bilgisayarlar"> MASAÜSTÜ BİLGİSAYARLAR </a>
              <div class="grand-sub-menu">
                <a href="/masaustu" class="grand-sub-menu-item">
                  Masaüstü Pc
                </a>
                ,
                <a
                  href="/all-in-one-masaustu-bilgisayarlar"
                  class="grand-sub-menu-item"
                >
                  All-in-One Pc
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/tabletler"> TABLETLER </a>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/oyuncularaozel"> OYUNCULARA ÖZEL </a>
              <div class="grand-sub-menu">
                <a href="/gamebook" class="grand-sub-menu-item"> Gamebook </a>
                ,
                <a href="/gaming-pc-1" class="grand-sub-menu-item">
                  Gaming Pc
                </a>
                ,
                <a href="/oyuncu-monitorleri" class="grand-sub-menu-item">
                  Oyuncu Monitörleri
                </a>
                ,
                <a href="/oyuncu-mouse" class="grand-sub-menu-item">
                  Oyuncu Mouse
                </a>
                ,
                <a href="/oyuncu-klavye" class="grand-sub-menu-item">
                  Oyuncu Klavye
                </a>
                ,
                <a href="/oyuncu-kulakliklari" class="grand-sub-menu-item">
                  Oyuncu Kulaklıkları
                </a>
                ,
                <a href="/gamepad" class="grand-sub-menu-item"> Gamepad </a>
                ,
                <a href="/direksiyon" class="grand-sub-menu-item">
                  Direksiyon
                </a>
                ,
                <a
                  href="/oyunculara-ozel-oyuncu-koltuklari"
                  class="grand-sub-menu-item"
                >
                  Oyuncu Koltukları
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/veri-depolama"> VERİ DEPOLAMA </a>
              <div class="grand-sub-menu">
                <a href="/hafiza-kartlari" class="grand-sub-menu-item">
                  Hafıza Kartları
                </a>
              </div>
            </h4>
          </div>
          <div class="col-2">
            <div class="sub-menu-item">
              <a href="/bilgisayar-bilesenleri">
                BİLGİSAYAR BİLEŞENLERİ VE ÇEVRE BİRİMLERİ
              </a>
              <div class="grand-sub-menu">
                <a href="/ekran-kartlari" class="grand-sub-menu-item">
                  Ekran Kartları
                </a>
                ,
                <a href="/monitorler-2" class="grand-sub-menu-item">
                  Monitörler
                </a>
                ,
                <a href="/mouse-3" class="grand-sub-menu-item"> Mouse </a>
                ,
                <a href="/klavyeler1" class="grand-sub-menu-item">
                  Klavyeler
                </a>
                ,
                <a href="/kulakliklar1" class="grand-sub-menu-item">
                  Kulaklıklar
                </a>
                ,
                <a
                  href="/bilgisayar-bilesenleri/yazicilar"
                  class="grand-sub-menu-item"
                >
                  Yazıcılar
                </a>
                ,
                <a href="/notebook-sogutucu" class="grand-sub-menu-item">
                  Notebook Soğutucu
                </a>
                ,
                <a href="/webcam1" class="grand-sub-menu-item"> WebCam </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/cevre-birimleri-ve-aksesuarlar"> AKSESUARLAR </a>
              <div class="grand-sub-menu">
                <a href="/ses-ve-goruntu-urunleri" class="grand-sub-menu-item">
                  Ses ve Görüntü Ürünleri
                </a>
                ,
                <a href="/notebook-cantalari" class="grand-sub-menu-item">
                  Notebook Çantaları
                </a>
                ,
                <a href="/kulaklik-mikrofon" class="grand-sub-menu-item">
                  Kulaklık
                </a>
                ,
                <a href="/oyuncu-koltuklari" class="grand-sub-menu-item">
                  Oyuncu Koltukları
                </a>
                ,
                <a
                  href="/kablolar-ve-akim-koruma-prizleri"
                  class="grand-sub-menu-item"
                >
                  Kablolar ve Akım Koruma Prizleri
                </a>
                ,
                <a href="/klavye-ve-mouse" class="grand-sub-menu-item">
                  Klavye ve Mouse
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/yazicilar-ve-sarf-malzemeleri"> YAZICILAR </a>
              <div class="grand-sub-menu">
                <a href="/sarf-malzemeleri" class="grand-sub-menu-item">
                  Sarf Malzemeleri
                </a>
                ,
                <a
                  href="/murekkep-puskurtmeli-yazicilar-inkjet"
                  class="grand-sub-menu-item"
                >
                  Mürekkep Püskürtmeli Yazıcılar (Inkjet)
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/monitorler"> MONİTÖRLER </a>
              <div class="grand-sub-menu">
                <a href="/monitorler3" class="grand-sub-menu-item">
                  Monitörler
                </a>
                ,
                <a href="/oyuncu-monitorleri2" class="grand-sub-menu-item">
                  Oyuncu Monitörleri
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/bilgisayar-outlet"> BİLGİSAYAR OUTLET </a>
            </div>
          </div>
          <div class="col-3">
            <div class="sub-menu-item">
              <a href="https://www.evkur.com.tr/dizustu-bilgisayarlar">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/bilgisayarlar-400x250px_ab05ei.png"
                />
              </a>
            </div>
            <div class="sub-menu-item">
              <a href="https://www.evkur.com.tr/tabletler">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/tabletler-400x250px_s9bce7.png"
                />
              </a>
            </div>
          </div>
        </div>
      </h3>
      <h3
        class="menu-item"
        @mouseenter="OpenDropdown"
        @mouseleave="CloseDropdown"
      >
        <a href="/elektronik"> ELEKTRONİK </a>
        <div class="sub-menu">
          <div class="col-1">
            <h4 class="sub-menu-item">
              <a href="/televizyon-ve-goruntu-sistemleri">
                TELEVİZYON VE GÖRÜNTÜ SİSTEMLERİ
              </a>
              <div class="grand-sub-menu">
                <a href="/televizyonlar" class="grand-sub-menu-item">
                  Televizyonlar
                </a>
                ,
                <a href="/uydu-alicilari" class="grand-sub-menu-item">
                  Uydu Alıcıları
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/kamera-ve-fotograf"> KAMERA VE FOTOĞRAF </a>
              <div class="grand-sub-menu">
                <a href="/aksesuarlar" class="grand-sub-menu-item">
                  Aksesuarlar
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/oto-ses-ve-goruntu-sistemleri-5">
                OTO SES VE GÖRÜNTÜ SİSTEMLERİ
              </a>
              <div class="grand-sub-menu">
                <a href="/oto-teypler-2" class="grand-sub-menu-item">
                  Oto Teypler ve Navigasyon Cihazları
                </a>
                ,
                <a href="/hoparlorler" class="grand-sub-menu-item">
                  Hoparlörler
                </a>
                ,
                <a href="/amplifikatorler" class="grand-sub-menu-item">
                  Amplifikatörler
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/elektronik-outlet"> ELEKTRONİK OUTLET </a>
            </h4>
          </div>
          <div class="col-2">
            <div class="sub-menu-item">
              <a href="/eglence"> EĞLENCE - HOBİ </a>
              <div class="grand-sub-menu">
                <a href="/media-player1" class="grand-sub-menu-item">
                  Media Player
                </a>
                ,
                <a href="/oyun-kollari" class="grand-sub-menu-item">
                  Oyun Kolları
                </a>
                ,
                <a href="/playstation-oyunlari" class="grand-sub-menu-item">
                  PlayStation Oyunları
                </a>
                ,
                <a href="/playstation-aksesuarlari" class="grand-sub-menu-item">
                  PlayStation Aksesuarları
                </a>
                ,
                <a href="/oyun-konsollari" class="grand-sub-menu-item">
                  Oyun Konsolları
                </a>
                ,
                <a href="/drone" class="grand-sub-menu-item"> Drone </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/ev-sinema-sistemleri"> EV SİNEMA VE SES SİSTEMLERİ </a>
              <div class="grand-sub-menu">
                <a href="/ev-sinema-sistemleri-2" class="grand-sub-menu-item">
                  Ev Sinema Sistemleri
                </a>
                ,
                <a href="/ses-sistemleri-2" class="grand-sub-menu-item">
                  Ses Sistemleri
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/tv-sehpalari-ve-uniteleri"> TV SEHPALARI </a>
            </div>
          </div>
          <div class="col-3">
            <div class="sub-menu-item">
              <a href="https://www.evkur.com.tr/televizyonlar">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/televizyon-400x250px_bm54lc.png"
                />
              </a>
            </div>
          </div>
        </div>
      </h3>
      <h3
        class="menu-item"
        @mouseenter="OpenDropdown"
        @mouseleave="CloseDropdown"
      >
        <a href="/ev-yasam"> EV/YAŞAM </a>
        <div class="sub-menu">
          <div class="col-1">
            <h4 class="sub-menu-item">
              <a href="/mobilya"> MOBİLYA </a>
              <div class="grand-sub-menu">
                <a href="/tablo" class="grand-sub-menu-item">
                  Tablolar ve Saatler
                </a>
                ,
                <a href="/yatak-odalari" class="grand-sub-menu-item">
                  Yatak Odaları
                </a>
                ,
                <a href="/yemek-odalari" class="grand-sub-menu-item">
                  Yemek Odaları
                </a>
                ,
                <a href="/koltuk-takimlari" class="grand-sub-menu-item">
                  Koltuk Takımları
                </a>
                ,
                <a href="/sehpalar" class="grand-sub-menu-item"> Sehpalar </a>
                ,
                <a href="/kose-takimlari" class="grand-sub-menu-item">
                  Köşe Takımları
                </a>
                ,
                <a href="/tekli-koltuklar" class="grand-sub-menu-item">
                  Tekli Koltuklar
                </a>
                ,
                <a href="/bebek-odalari" class="grand-sub-menu-item">
                  Bebek Odaları
                </a>
                ,
                <a
                  href="/masa-takimi-ve-sandalyeler"
                  class="grand-sub-menu-item"
                >
                  Masa Takımı ve Sandalyeler
                </a>
                ,
                <a href="/genc-odalari-1" class="grand-sub-menu-item">
                  Genç Odaları
                </a>
                ,
                <a href="/baza-ve-basliklar" class="grand-sub-menu-item">
                  Baza ve Başlıklar
                </a>
                ,
                <a href="/yataklar" class="grand-sub-menu-item"> Yataklar </a>
                ,
                <a href="/tv-uniteleri" class="grand-sub-menu-item">
                  Tv Üniteleri
                </a>
                ,
                <a href="/tekil-urunler" class="grand-sub-menu-item">
                  Tekil Ürünler
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/bahce-ve-balkon-mobilyalari">
                BAHÇE VE BALKON MOBİLYALARI
              </a>
              <div class="grand-sub-menu">
                <a href="/bahce-ve-balkon" class="grand-sub-menu-item">
                  Bahçe Sandalyeleri
                </a>
                ,
                <a href="/bar-tabureleri" class="grand-sub-menu-item">
                  Bar Tabureleri
                </a>
                ,
                <a href="/bar-sandalyeleri" class="grand-sub-menu-item">
                  Bar Sandalyeleri
                </a>
                ,
                <a href="/sehpalar-2" class="grand-sub-menu-item"> Sehpalar </a>
                ,
                <a href="/masalar-3" class="grand-sub-menu-item"> Masalar </a>
                ,
                <a href="/bar-masalari" class="grand-sub-menu-item">
                  Bar Masaları
                </a>
                ,
                <a href="/kose-takimlari-2" class="grand-sub-menu-item">
                  Köşe Takımları
                </a>
                ,
                <a href="/uclu-setler" class="grand-sub-menu-item">
                  Oturma Setleri
                </a>
                ,
                <a href="/tekli-koltuklar-2" class="grand-sub-menu-item">
                  Tekli Koltuklar
                </a>
                ,
                <a href="/uzatma-parcalari" class="grand-sub-menu-item">
                  Uzatma Parçaları
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/ev-tekstili"> EV TEKSTİLİ </a>
              <div class="grand-sub-menu">
                <a
                  href="/pike-ve-nevresim-takimlari"
                  class="grand-sub-menu-item"
                >
                  Pike ve Nevresim Takımları
                </a>
                ,
                <a
                  href="/yatak-ortuleri-ve-uyku-setleri"
                  class="grand-sub-menu-item"
                >
                  Yatak Örtüleri ve Uyku Setleri
                </a>
                ,
                <a href="/bebek-tekstil-urunleri" class="grand-sub-menu-item">
                  Bebek Tekstil Ürünleri
                </a>
                ,
                <a href="/oda-takimlari-ortuler" class="grand-sub-menu-item">
                  Oda Takımları &amp; Örtüler
                </a>
                ,
                <a href="/battaniyeler" class="grand-sub-menu-item">
                  Battaniyeler
                </a>
                ,
                <a href="/yorganlar" class="grand-sub-menu-item"> Yorganlar </a>
                ,
                <a href="/yastiklar-2" class="grand-sub-menu-item">
                  Yastıklar
                </a>
                ,
                <a href="/havlular" class="grand-sub-menu-item"> Havlular </a>
                ,
                <a href="/perdeler" class="grand-sub-menu-item"> Perdeler </a>
                ,
                <a href="/alezler" class="grand-sub-menu-item"> Alezler </a>
                ,
                <a href="/carsaflar" class="grand-sub-menu-item"> Çarşaflar </a>
                ,
                <a href="/banyo-paspaslari" class="grand-sub-menu-item">
                  Banyo Paspasları
                </a>
                ,
                <a href="/kilim-2" class="grand-sub-menu-item"> Kilim </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/bebek-urunlerioyuncak"> ANNE-BEBEK / OYUNCAK </a>
              <div class="grand-sub-menu">
                <a href="/bebek-urunleri" class="grand-sub-menu-item">
                  Anne-Bebek
                </a>
                ,
                <a href="/oyuncak" class="grand-sub-menu-item"> Oyuncak </a>
                ,
                <a href="/bisikletler-1" class="grand-sub-menu-item">
                  Bisikletler
                </a>
              </div>
            </h4>
          </div>
          <div class="col-2">
            <div class="sub-menu-item">
              <a href="/mutfak-gerecleri"> MUTFAK GRUBU </a>
              <div class="grand-sub-menu">
                <a href="/yemek-takimlari" class="grand-sub-menu-item">
                  Yemek Takımları
                </a>
                ,
                <a href="/kahvalti-takimlari" class="grand-sub-menu-item">
                  Kahvaltı Takımları
                </a>
                ,
                <a href="/pasta-takimlari" class="grand-sub-menu-item">
                  Pasta Takımları
                </a>
                ,
                <a href="/tencereler" class="grand-sub-menu-item">
                  Tencereler
                </a>
                ,
                <a href="/tencere-setleri" class="grand-sub-menu-item">
                  Tencere Setleri
                </a>
                ,
                <a href="/tava-setleri-tavalar" class="grand-sub-menu-item">
                  Tava Setleri / Tavalar
                </a>
                ,
                <a href="/catal-bicak-takimlari" class="grand-sub-menu-item">
                  Çatal-Bıçak Takımları
                </a>
                ,
                <a
                  href="/caydanliklar-ve-cezve-takimlari"
                  class="grand-sub-menu-item"
                >
                  Çaydanlıklar Ve Cezve Takımları
                </a>
                ,
                <a href="/cay-kahve-takimlari" class="grand-sub-menu-item">
                  Çay-Kahve Takımları
                </a>
                ,
                <a href="/baharatlik" class="grand-sub-menu-item">
                  Baharatlık
                </a>
                ,
                <a href="/pratik-ev-gerecleri" class="grand-sub-menu-item">
                  Mutfak Gereçleri
                </a>
                ,
                <a href="/dekorasyon-urunleri1" class="grand-sub-menu-item">
                  Dekorasyon Ürünleri
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/hali-kilim"> HALI - KİLİM </a>
              <div class="grand-sub-menu">
                <a
                  href="/dijital-baskili-hali-ve-kilim-modelleri"
                  class="grand-sub-menu-item"
                >
                  Dijital Baskılı Halı
                </a>
                ,
                <a
                  href="/makine-hali-ve-kilim-modelleri"
                  class="grand-sub-menu-item"
                >
                  Makine Halı
                </a>
                ,
                <a href="/cocuk-odasi-halilari" class="grand-sub-menu-item">
                  Çocuk Odası Halıları
                </a>
                ,
                <a href="/post-pelus-halilar" class="grand-sub-menu-item">
                  Post - Peluş Halılar
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/ev-gerecleri"> EV GEREÇLERİ </a>
              <div class="grand-sub-menu">
                <a href="/dikis-makineleri" class="grand-sub-menu-item">
                  Dikiş Makineleri
                </a>
                ,
                <a href="/seyahat-grubu" class="grand-sub-menu-item">
                  Seyahat Grubu
                </a>
                ,
                <a
                  href="/utu-masasi-ve-kurutmaliklar"
                  class="grand-sub-menu-item"
                >
                  Ütü Masası ve Kurutmalıklar
                </a>
                ,
                <a href="/dekorasyon-urunleri" class="grand-sub-menu-item">
                  Dekorasyon Ürünleri
                </a>
                ,
                <a
                  href="/avizeler-ve-aydinlatmalar-2"
                  class="grand-sub-menu-item"
                >
                  Avizeler ve Aydınlatmalar
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/yapi-gerecleri"> YAPI GEREÇLERİ </a>
              <div class="grand-sub-menu">
                <a href="/elektrikli-aletler" class="grand-sub-menu-item">
                  Elektrikli Aletler
                </a>
                ,
                <a href="/jeneratorler1" class="grand-sub-menu-item">
                  Jeneratörler
                </a>
                ,
                <a href="/aksesuarlar1" class="grand-sub-menu-item">
                  Aksesuarlar
                </a>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="sub-menu-item">
              <a href="mobilya">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/mobilyalar-400x250px_z5ltw8.png"
                />
              </a>
            </div>
            <div class="sub-menu-item">
              <a href="https://www.evkur.com.tr/yemek-takimlari">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/yemek-takimi-400x250px_hr8t9e.png"
                />
              </a>
            </div>
          </div>
        </div>
      </h3>
      <h3
        class="menu-item"
        @mouseenter="OpenDropdown"
        @mouseleave="CloseDropdown"
      >
        <a href="/elektrikli-ev-aletleri"> ELEKTRİKLİ EV ALETLERİ </a>
        <div class="sub-menu">
          <div class="col-1">
            <h4 class="sub-menu-item">
              <a href="/beyaz-esyalar"> BEYAZ EŞYALAR </a>
              <div class="grand-sub-menu">
                <a href="/buzdolabi" class="grand-sub-menu-item"> Buzdolabı </a>
                ,
                <a
                  href="/camasir-ve-kurutma-makineleri"
                  class="grand-sub-menu-item"
                >
                  Çamaşır ve Kurutma Makineleri
                </a>
                ,
                <a href="/bulasik-makineleri" class="grand-sub-menu-item">
                  Bulaşık Makineleri
                </a>
                ,
                <a href="/firin" class="grand-sub-menu-item"> Fırın </a>
                ,
                <a href="/ocaklar" class="grand-sub-menu-item"> Ocaklar </a>
                ,
                <a
                  href="/davlumbazlar-ve-aspiratorler"
                  class="grand-sub-menu-item"
                >
                  Davlumbazlar ve Aspiratörler
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/isitma-sogutma"> ISITMA - SOĞUTMA </a>
              <div class="grand-sub-menu">
                <a href="/sobalar-ve-isiticilar" class="grand-sub-menu-item">
                  Sobalar ve Isıtıcılar
                </a>
                ,
                <a href="/termosifonlar" class="grand-sub-menu-item">
                  Termosifonlar
                </a>
                ,
                <a href="/klimalar" class="grand-sub-menu-item"> Klimalar </a>
                ,
                <a href="/vantilatorler" class="grand-sub-menu-item">
                  Vantilatörler
                </a>
                ,
                <a href="/radyatorler" class="grand-sub-menu-item">
                  Radyatörler
                </a>
                ,
                <a href="/hava-perdeleri" class="grand-sub-menu-item">
                  Hava Perdeleri
                </a>
                ,
                <a href="/sofbenler" class="grand-sub-menu-item"> Şofbenler </a>
                ,
                <a href="/kombiler" class="grand-sub-menu-item"> Kombiler </a>
                ,
                <a href="/sebiller" class="grand-sub-menu-item"> Sebiller </a>
                ,
                <a href="/su-aritma-cihazlari" class="grand-sub-menu-item">
                  Su Arıtma Cihazları
                </a>
                ,
                <a href="/boyler" class="grand-sub-menu-item"> Boyler </a>
                ,
                <a href="/hidroforlar" class="grand-sub-menu-item">
                  Hidroforlar
                </a>
                ,
                <a href="/dalgic-pompalari" class="grand-sub-menu-item">
                  Dalgıç Pompaları
                </a>
                ,
                <a href="/oda-termostatlari" class="grand-sub-menu-item">
                  Oda Termostatları
                </a>
                ,
                <a href="/yogusmali-kazanlar" class="grand-sub-menu-item">
                  Yoğuşmalı Kazanlar
                </a>
                ,
                <a
                  href="/hava-temizleme-nemlendiriciler-2"
                  class="grand-sub-menu-item"
                >
                  Hava Temizleme / Nemlendiriciler
                </a>
                ,
                <a href="/ilaclama-cihazlari" class="grand-sub-menu-item">
                  İlaçlama Cihazları
                </a>
              </div>
            </h4>
          </div>
          <div class="col-2">
            <div class="sub-menu-item">
              <a href="/kucuk-ev-aletleri"> KÜÇÜK EV ALETLERİ </a>
              <div class="grand-sub-menu">
                <a href="/cay-kahve-mak-ve-kettle" class="grand-sub-menu-item">
                  Çay Kahve Mak. ve Kettle
                </a>
                ,
                <a href="/elektrikli-supurgeler-2" class="grand-sub-menu-item">
                  Süpürgeler
                </a>
                ,
                <a href="/utuler" class="grand-sub-menu-item"> Ütüler </a>
                ,
                <a href="/gida-hazirlama-cihazlari" class="grand-sub-menu-item">
                  Gıda Hazırlama Cihazları
                </a>
                ,
                <a
                  href="/pisiriciler-ve-isiticilar"
                  class="grand-sub-menu-item"
                >
                  Pişiriciler ve Isıtıcılar
                </a>
                ,
                <a
                  href="/mutfak-robotlari-ve-blenderler"
                  class="grand-sub-menu-item"
                >
                  Mutfak Robotları ve Blenderler
                </a>
                ,
                <a href="/meyve-sikacaklari" class="grand-sub-menu-item">
                  Meyve Sıkacakları
                </a>
                ,
                <a href="/dograyicilarrondolar" class="grand-sub-menu-item">
                  Doğrayıcılar / Rondolar
                </a>
                ,
                <a href="/mikserler" class="grand-sub-menu-item"> Mikserler </a>
                ,
                <a href="/tost-makineleri" class="grand-sub-menu-item">
                  Tost Makineleri
                </a>
                ,
                <a
                  href="/ekmek-kizartma-makineleri"
                  class="grand-sub-menu-item"
                >
                  Ekmek Kızartma Makineleri
                </a>
                ,
                <a href="/hava-nemlendiriciler" class="grand-sub-menu-item">
                  Hava Temizleme / Nemlendiriciler
                </a>
                ,
                <a href="/ceyiz-seti" class="grand-sub-menu-item">
                  Çeyiz Seti
                </a>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="sub-menu-item">
              <a href="/beyaz-esyalar">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/beyaz-esyalar-400x250px_j7tmw0.png"
                />
              </a>
            </div>
          </div>
        </div>
      </h3>
      <h3
        class="menu-item"
        @mouseenter="OpenDropdown"
        @mouseleave="CloseDropdown"
      >
        <a href="/spor-outdoor-motor"> SPOR / OUTDOOR / MOTOR </a>
        <div class="sub-menu">
          <div class="col-1">
            <h4 class="sub-menu-item">
              <a href="/outdoor"> OUTDOOR </a>
              <div class="grand-sub-menu">
                <a href="/bahce-malzemeleri" class="grand-sub-menu-item">
                  Bahçe Malzemeleri
                </a>
                ,
                <a href="/doga-sporlari" class="grand-sub-menu-item">
                  Doğa Sporları
                </a>
                ,
                <a href="/outdoor-kamp" class="grand-sub-menu-item">
                  Outdoor Kamp
                </a>
                ,
                <a href="/sogutucu-buzluk" class="grand-sub-menu-item">
                  Soğutucu Buzluk
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/spor-aletleri"> SPOR ALETLERİ </a>
              <div class="grand-sub-menu">
                <a href="/kosu-bantlari" class="grand-sub-menu-item">
                  Koşu Bantları
                </a>
                ,
                <a href="/kondisyon-bisikletleri" class="grand-sub-menu-item">
                  Kondisyon Bisikletleri
                </a>
                ,
                <a
                  href="/agirlik-ve-calisma-istasyonlari"
                  class="grand-sub-menu-item"
                >
                  Ağırlık ve Çalışma İstasyonları
                </a>
                ,
                <a href="/paten-ve-scooterlar" class="grand-sub-menu-item">
                  Paten ve Scooterlar
                </a>
                ,
                <a href="/spor-aksesuarlari" class="grand-sub-menu-item">
                  Spor Aksesuarları
                </a>
                ,
                <a href="/diger-spor-aletleri" class="grand-sub-menu-item">
                  Diğer Spor Aletleri
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/motorlu-araclar/motor-aksesuarlari">
                MOTOR AKSESUARLARI
              </a>
              <div class="grand-sub-menu">
                <a href="/kasklar1" class="grand-sub-menu-item"> Kasklar </a>
                ,
                <a
                  href="/kask-aksesuarlari-ve-burunluklar"
                  class="grand-sub-menu-item"
                >
                  Kask Aksesuarları ve Burunluklar
                </a>
                ,
                <a href="/motor-giysileri" class="grand-sub-menu-item">
                  Motor Giysileri
                </a>
                ,
                <a href="/eldivenler" class="grand-sub-menu-item">
                  Eldivenler
                </a>
                ,
                <a
                  href="/dizlikler-ve-dizlik-ortuleri"
                  class="grand-sub-menu-item"
                >
                  Dizlikler ve Dizlik Örtüleri
                </a>
              </div>
            </h4>
          </div>
          <div class="col-2">
            <div class="sub-menu-item">
              <a href="/bisikletler"> BİSİKLETLER </a>
              <div class="grand-sub-menu">
                <a href="/cocuk-bisikleti" class="grand-sub-menu-item">
                  Çocuk Bisikleti
                </a>
                ,
                <a href="/elektrikli-bisiklet" class="grand-sub-menu-item">
                  Elektrikli Bisiklet
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/motorlu-araclar"> MOTORLU ARAÇLAR </a>
              <div class="grand-sub-menu">
                <a href="/motosikletler" class="grand-sub-menu-item">
                  Motosikletler
                </a>
                ,
                <a href="/elektrikli-kaykaylar" class="grand-sub-menu-item">
                  Elektrikli Kaykaylar
                </a>
                ,
                <a
                  href="/elektrikli-bisiklet-ve-mopetler"
                  class="grand-sub-menu-item"
                >
                  Elektrikli Mopetler
                </a>
                ,
                <a href="/atv" class="grand-sub-menu-item"> ATV </a>
                ,
                <a href="/elektrikli-scooter-2" class="grand-sub-menu-item">
                  Elektrikli Scooter
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/arac-aksesuarlari"> ARAÇ AKSESUARLARI </a>
              <div class="grand-sub-menu">
                <a href="/farlar" class="grand-sub-menu-item"> Farlar </a>
                ,
                <a href="/lastikler" class="grand-sub-menu-item"> Lastikler </a>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="sub-menu-item">
              <a href="/kosu-bantlari">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/kosu-bandi-400x250px_c4j2cg.png"
                />
              </a>
            </div>
            <div class="sub-menu-item">
              <a href="/motosikletler">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/-400x200px_pe96co.png"
                />
              </a>
            </div>
          </div>
        </div>
      </h3>
      <h3
        class="menu-item"
        @mouseenter="OpenDropdown"
        @mouseleave="CloseDropdown"
      >
        <a href="/kozmetikkisisel-bakimaksesuar">
          KOZMETİK / KİŞİSEL BAKIM / AKSESUAR
        </a>
        <div class="sub-menu">
          <div class="col-1">
            <h4 class="sub-menu-item">
              <a href="/sac-sakal-sekillendirme">
                SAÇ &amp; SAKAL ŞEKİLLENDİRME
              </a>
              <div class="grand-sub-menu">
                <a href="/tras-makineleri" class="grand-sub-menu-item">
                  Tıraş Makineleri
                </a>
                ,
                <a href="/duzlestiriciler" class="grand-sub-menu-item">
                  Düzleştiriciler
                </a>
                ,
                <a href="/fon-makineleri" class="grand-sub-menu-item">
                  Fön Makineleri
                </a>
                ,
                <a href="/sekillendiriciler" class="grand-sub-menu-item">
                  Şekillendiriciler
                </a>
                ,
                <a href="/masalar" class="grand-sub-menu-item"> Maşalar </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/cilt-bakim-urunleri-2"> CİLT BAKIM ÜRÜNLERİ </a>
              <div class="grand-sub-menu">
                <a href="/goz-bakimi" class="grand-sub-menu-item">
                  Göz Bakımı
                </a>
                ,
                <a href="/yuz-bakimi" class="grand-sub-menu-item">
                  Yüz Bakımı
                </a>
                ,
                <a href="/vucut-bakimi" class="grand-sub-menu-item">
                  Vücut Bakımı
                </a>
                ,
                <a href="/maskeler" class="grand-sub-menu-item"> Maskeler </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/koku-makineleri"> KOKU MAKİNELERİ </a>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/parfumler"> PARFÜMLER </a>
              <div class="grand-sub-menu">
                <a href="/kadin-parfum" class="grand-sub-menu-item">
                  Kadın Parfüm
                </a>
                ,
                <a href="/erkek-parfum" class="grand-sub-menu-item">
                  Erkek Parfüm
                </a>
                ,
                <a href="/parfum-deodorant" class="grand-sub-menu-item">
                  Parfüm &amp; Deodorant
                </a>
                ,
                <a href="/kolonya" class="grand-sub-menu-item"> Kolonya </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/sac-bakim-urunleri"> SAÇ BAKIM ÜRÜNLERİ </a>
              <div class="grand-sub-menu">
                <a href="/fircalar-ve-taraklar" class="grand-sub-menu-item">
                  Fırçalar Ve Taraklar
                </a>
                ,
                <a href="/sac-kremleri" class="grand-sub-menu-item">
                  Saç Kremleri
                </a>
                ,
                <a href="/sampuanlar" class="grand-sub-menu-item">
                  Şampuanlar
                </a>
                ,
                <a href="/sekillendirici-urunler" class="grand-sub-menu-item">
                  Şekillendirici Ürünler
                </a>
              </div>
            </h4>
            <h4 class="sub-menu-item">
              <a href="/epilatorler"> EPİLATÖRLER </a>
            </h4>
          </div>
          <div class="col-2">
            <div class="sub-menu-item">
              <a href="/makyaj"> MAKYAJ </a>
              <div class="grand-sub-menu">
                <a href="/yuz-ve-vucut" class="grand-sub-menu-item">
                  Yüz ve Vücut
                </a>
                ,
                <a href="/dudak" class="grand-sub-menu-item"> Dudak </a>
                ,
                <a href="/goz" class="grand-sub-menu-item"> Göz </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/taki"> TAKI </a>
              <div class="grand-sub-menu">
                <a href="/kupe" class="grand-sub-menu-item"> Küpe </a>
                ,
                <a href="/kolye" class="grand-sub-menu-item"> Kolye </a>
                ,
                <a href="/bileklik" class="grand-sub-menu-item"> Bileklik </a>
                ,
                <a href="/gumus-setler" class="grand-sub-menu-item">
                  Gümüş Setler
                </a>
                ,
                <a href="/yuzuk" class="grand-sub-menu-item"> Yüzük </a>
                ,
                <a href="/bilezik" class="grand-sub-menu-item"> Bilezik </a>
                ,
                <a href="/tesbih" class="grand-sub-menu-item"> Tesbih </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/saglik-kisisel-bakim-2"> SAĞLIK / KİŞİSEL BAKIM </a>
              <div class="grand-sub-menu">
                <a href="/kisisel-bakim-urunleri" class="grand-sub-menu-item">
                  Kişisel Bakım Ürünleri
                </a>
                ,
                <a href="/makyaj-malzemeleri" class="grand-sub-menu-item">
                  Makyaj Malzemeleri
                </a>
                ,
                <a href="/el-ve-ayak-bakimi" class="grand-sub-menu-item">
                  El Ve Ayak Bakımı
                </a>
                ,
                <a href="/baskuller" class="grand-sub-menu-item"> Basküller </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/gunes-bakimi"> GÜNEŞ BAKIMI </a>
              <div class="grand-sub-menu">
                <a href="/gunes-krem-ve-losyonlari" class="grand-sub-menu-item">
                  Güneş Krem ve Losyonları
                </a>
                ,
                <a href="/gunes-sonrasi-urunler" class="grand-sub-menu-item">
                  Güneş Sonrası Ürünler
                </a>
                ,
                <a href="/cocuk-gunes-urunleri" class="grand-sub-menu-item">
                  Çocuk Güneş Ürünleri
                </a>
                ,
                <a href="/gunes-sutu" class="grand-sub-menu-item">
                  Güneş Sütü
                </a>
                ,
                <a href="/gunes-yaglari" class="grand-sub-menu-item">
                  Güneş Yağları
                </a>
              </div>
            </div>
            <div class="sub-menu-item">
              <a href="/banyo-urunleri"> BANYO ÜRÜNLERİ </a>
              <div class="grand-sub-menu">
                <a href="/bebek-urunleri-2" class="grand-sub-menu-item">
                  Bebek Ürünleri
                </a>
                ,
                <a href="/diger-banyo-urunleri" class="grand-sub-menu-item">
                  Diğer Banyo Ürünleri
                </a>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="sub-menu-item">
              <a href="/parfumler">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/parfumler-400x250px_m9rsx2.png"
                />
              </a>
            </div>
            <div class="sub-menu-item">
              <a href="/fon-makineleri">
                <img
                  src="https://cdn.evkur.com.tr/c/Category/fon-makineleri-400x250px_c8knt2.png"
                />
              </a>
            </div>
          </div>
        </div>
      </h3>
    </div>
  </div>
  </div>
</header>
</template>
<script>

export default {
  components: {},
  computed: {},
  props: {},
  methods: {
    OpenDropdown(event) {
      var Target = event.target
      Target.classList.add('hover')
    },
    CloseDropdown(event) {
      var Target = event.target
      Target.classList.remove('hover')
    },
  },
}
</script>
</style>
