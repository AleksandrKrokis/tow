<template>
  <div>
    <header class="page_header header_darkgrey header_transparent table_section table_section_md toggler_right">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <a href="./" class="logo top_logo bottommargin_10 topmargin_10">
              <img src="~/assets/logo.svg" width="180px" alt="alfatre">
            </a>
            <span class="toggle_menu">
								<span></span>
							</span>
          </div>
          <div class="col-md-9 text-right">
            <nav class="mainmenu_wrapper">
              <ul class="mainmenu nav sf-menu">
                <li class="">
                  <nuxt-link to="/" class="inline-block padding_0" style="margin-left: 5px; margin-right: 5px;" @click="setLocale('ee')">
                    <img src="~/assets/ee.svg" width="20px" alt="">
                  </nuxt-link>
                </li>
                <li class="">
                  <nuxt-link :to="localePath('en')" class="inline-block padding_0" style="margin-left: 5px; margin-right: 5px;" @click="setLocale('en')">
                    <img src="~/assets/gb.svg" width="20px" alt="">
                  </nuxt-link>
                </li>
                <li class="">
                  <nuxt-link :to="localePath('ru')" class="inline-block padding_0" style="margin-left: 5px; margin-right: 5px;" @click="setLocale('ru')">
                    <img src="~/assets/ru.svg" width="20px" alt="">
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <section class="intro_section page_mainslider ds">
      <img src="~/assets/slide-1.webp" alt="">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="slide_description_wrapper">
              <div class="slide_description">
                <div class="intro-layer to_animate" data-animation="fadeInUp">
                  <h1 class="big grey">
                    {{ $t('hero.firstLine') }}
                  </h1>
                </div>
                <div class="intro-layer to_animate" data-animation="fadeInUp">
                  <p class="lightfont">
                    Fast, courteous and inexpensive towing and
                    <br> roadside assistance in Baltic states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page_breadcrumbs cs background_cover section_padding_top_40 section_padding_bottom_40">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h2>{{ $t('telephoneHero') }}: <a href="tel:37253300053">+372 53 3000 53</a></h2>
          </div>
        </div>
      </div>
    </section>

    <section
        class="ls section_padding_top_150 section_padding_bottom_150 table_section table_section_md columns_padding_25 columns_margin_bottom_30">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-6 text-center text-md-right">
            <img src="~/assets/slide-2.webp" alt="">
            <img src="~/assets/slide-3.webp" class="topmargin_10" alt="">
          </div>
          <div class="col-lg-5 col-md-6">
            <h2 class="section_header numbered-header">hiinad eesti piires:</h2>
            <p class="small-text">effective transportation</p>
            <hr class="divider_30_3 zebra_bg">
            <p>
              Omame kogemusi rasketehnika pukseerimises, vintsimises ja
              päästetöödes aastast 65.
              Testame veautode, haagiste, busside, traktorite vedusid ja pakume tehnoabi ning erineva raskusastmega
              vintsimistöid eestis ja välismaal.
              Leiame lahendused ka keerulistes oludes!
            </p>
            <div class="inline-block topmargin_10">
              <ul class="list1 checklist grey">
                <li>Väljakutse <strong>50€</strong></li>
                <li>Töötund 07-22 <strong>100€</strong></li>
                <li>Töötund 22-07 <strong>160€</strong></li>
                <li>Vintsimise töötund <strong>160€</strong></li>
                <li>Available
                  <strong>24 hours</strong> a day,
                  <strong>7 days</strong> a week
                </li>
                <li><u>Hindadele lisandub käibemaks!</u></li>
              </ul>
              <p>Sidud välismaale kokkuleppe hindadega! <br> Puksiir@alfatre.ee vi +372 53 3000 53</p>
            </div>
          </div>
        </div>
        <div class="row topmargin_40">
          <div class="col-3">
            <div class="h3">Teenindusleping puksiir</div>
            <a href="#">Laadi alla</a>
          </div>
          <div class="col-3">
            <div class="h3">Tingimused</div>
            <p>Välissõite ja muid hinnakirjas välja toomata site teostatakse eraldi|
              kokkuleppe alusel. Puksiirteenus algab väljasoidu algusest Teaduspargil
              11, Tallinn ja löppeb tagasi judes Teaduspargi 11, Tallinn.</p>
          </div>
          <div class="col-3">
            <div class="h3">Teisaldamise tingimused</div>
            <a href="#">Laadi alla</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="page_footer ds section_padding_top_65 section_padding_bottom_50 columns_margin_bottom_40">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 to_animate animated fadeInUp" data-animation="fadeInUp">
            <a href="./" class="logo">
              <img src="~assets/logo.svg" width="180px" alt="">
            </a>
          </div>
          <div class="col-md-3 col-sm-6 to_animate animated fadeInUp" data-animation="fadeInUp">
            <div class="widget widget_text topmargin_15">
              <h3 class="widget-title">Get in
                <strong>Touch</strong>
              </h3>
              <hr class="divider_30_3 zebra_bg divider_left">
              <div class="media small-teaser">
                <div class="media-left">
                  <i class="fa fa-map-marker highlight fontsize_18"></i>
                </div>
                <div class="media-body">
                  Teaduspargi 11, Tallinn
                </div>
              </div>
              <div class="media small-teaser">
                <div class="media-left">
                  <i class="fa fa-envelope highlight fontsize_18"></i>
                </div>
                <div class="media-body greylinks">
                  <a href="mailto:info@alfatre.ee">info@alfatre.ee</a>
                </div>
              </div>
              <div class="media small-teaser">
                <div class="media-left">
                  <i class="fa fa-phone highlight fontsize_18"></i>
                </div>
                <div class="media-body">
                  <a href="tel:37253300053">+372 53 3000 53</a>
                </div>
              </div>
              <div class="media small-teaser">
                <div class="media-left">
                  <i class="fa fa-clock-o highlight fontsize_18"></i>
                </div>
                <div class="media-body">
                  24 hours a day, 7 days a week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<script lang="ts" setup>
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

import '~/assets/animations.css'
import '~/assets/bootstrap.min.css'
import '~/assets/main.css'
import '~/assets/fonts.css'

useHead({
  script: [
    {
      src: '/js/compressed.js',
      type: 'text/javascript',
      tagPosition: 'bodyClose'
    },
    {
      src: '/js/main.js',
      type: 'text/javascript',
      tagPosition: 'bodyClose'
    }
  ]
})
</script>
