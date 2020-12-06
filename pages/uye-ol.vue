<template>
  <section class="form-section">
    <div class="container">
      <div class="form register-form">
        <form
          action="/uye-ol"
          method="post"
          class="validate"
          novalidate="novalidate"
        >
          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="RuLbjx3EB7hw05lJ6Y6WFKZ136pwelY16q5HZW-MUljbZbMi8VcZ06iGzlCsAE0eTS5lN4IY8HsbjB-0LDOBkaPQDYdYKnwXxvie3AXobHM1"
          />
          <div class="form-title">Yeni Üyelik Oluşturma</div>
          <div class="form-subtitle">Kişisel Bilgileriniz</div>
          <div class="form-item-container">
            <div class="col-2">
              <div class="col-2">
                <div class="form-item">
                  <label> <span>*</span> Ad </label>
                  <input
                    class="validate-item only-text-with-space"
                    data-error="Bu alan zorunludur."
                    id="FirstName"
                    name="FirstName"
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div class="col-2">
                <div class="form-item">
                  <label> <span>*</span> Soyad </label>
                  <input
                    class="validate-item only-text-with-space"
                    data-error="Bu alan zorunludur."
                    id="LastName"
                    name="LastName"
                    type="text"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="form-item">
                <label> <span>*</span> E-posta </label>
                <input
                  class="validate-item email"
                  data-error="Lütfen geçerli bir e-posta adresi giriniz."
                  id="Email"
                  name="Email"
                  type="text"
                  value=""
                />
              </div>
            </div>
            <div class="col-2">
              <div class="form-item password-hide">
                <label> <span>*</span> Şifre </label>
                <input
                  class="validate-item password"
                  data-error="Bu alan zorunludur."
                  id="Password"
                  minlengthattr="6"
                  name="Password"
                  type="password"
                />
                <span class="password-hint"></span>
              </div>
            </div>

            <div class="col-2">
              <div class="form-item">
                <label> Doğum Tarihi </label>
                <div class="col-3">
                  <input
                    autocomplete="new-password"
                    class="only-number day"
                    data-date="true"
                    data-error="Bu alan zorunludur."
                    id="BirthDateDay"
                    maxlength="2"
                    name="BirthDateDay"
                    placeholder="Gün"
                    type="tel"
                    value=""
                  />
                </div>
                <div class="col-3">
                  <input
                    autocomplete="new-password"
                    class="only-number month"
                    data-date="true"
                    data-error="Bu alan zorunludur."
                    id="BirthDateMonth"
                    maxlength="2"
                    name="BirthDateMonth"
                    placeholder="Ay"
                    type="tel"
                    value=""
                  />
                </div>
                <div class="col-3">
                  <input
                    autocomplete="new-password"
                    class="only-number year"
                    data-date="true"
                    data-error="Bu alan zorunludur."
                    id="BirthDateYear"
                    maxlength="4"
                    name="BirthDateYear"
                    placeholder="Yıl"
                    type="tel"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="form-item">
                <label> Cinsiyet </label>
                <input
                  type="radio"
                  name="Gender"
                  id="sex-male"
                  value="10"
                  data-error="Bu alan zorunludur."
                />
                <label for="sex-male">Erkek</label>
                <input type="radio" name="Gender" id="sex-female" value="20" />
                <label for="sex-female">Kadın</label>
              </div>
            </div>
          </div>

          <div class="form-item form-item-button form-item-button-with-border">
            <div class="aggrements form-mini-checkbox">
              <div class="form-item">
                <input
                  class="validate-item"
                  data-val="true"
                  data-val-required="AcceptUserAggrement alanı gereklidir."
                  id="AcceptUserAggrement"
                  name="AcceptUserAggrement"
                  type="checkbox"
                  value="true"
                /><input
                  name="AcceptUserAggrement"
                  type="hidden"
                  value="false"
                />
                <label for="AcceptUserAggrement"
                  ><a href="javascript:void(0)">Üyelik sözleşmesi</a>ni okudum
                  ve kabul ediyorum.</label
                >
              </div>
              <div class="form-item">
                <input
                  checked="checked"
                  data-val="true"
                  data-val-required="AllowCommunicationSms alanı gereklidir."
                  id="AllowCommunicationSms"
                  name="AllowCommunicationSms"
                  type="checkbox"
                  value="true"
                /><input
                  name="AllowCommunicationSms"
                  type="hidden"
                  value="false"
                />
                <label for="AllowCommunicationSms"
                  >SMS ile iletişime izin veriyorum.</label
                >
              </div>
              <div class="form-item">
                <input
                  checked="checked"
                  data-val="true"
                  data-val-required="AllowCommunicationEmail alanı gereklidir."
                  id="AllowCommunicationEmail"
                  name="AllowCommunicationEmail"
                  type="checkbox"
                  value="true"
                /><input
                  name="AllowCommunicationEmail"
                  type="hidden"
                  value="false"
                />
                <label for="AllowCommunicationEmail"
                  >E-posta ile iletişime izin veriyorum.</label
                >
              </div>
            </div>
            <a href="javascript:void(0)" class="button red submit-button">
              <span> ÜYE OL </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>