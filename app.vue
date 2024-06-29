<template>
  <div>
    <header class="page_header header_darkgrey header_transparent table_section table_section_md toggler_right">
      <div class="container">
        <div class="row" style="display: flex; justify-content: space-between; align-items: center;">
          <div class="col-md-3">
            <a href="./" class="logo top_logo bottommargin_10 topmargin_10">
              <img src="~/assets/logo.svg" width="180px" alt="alfatre">
            </a>
          </div>
          <div class="col-md-9 text-right">
            <nav class="mainmenu_wrapper" style="display: block">
              <nuxt-link to="/" class="inline-block padding_0" style="margin-left: 5px; margin-right: 5px;"
                         @click="setLocaleAndReload('ee')">
                <img src="~/assets/ee.svg" width="20px" alt="">
              </nuxt-link>
              <nuxt-link :to="localePath('en')" class="inline-block padding_0"
                         style="margin-left: 5px; margin-right: 5px;" @click="setLocaleAndReload('en')">
                <img src="~/assets/gb.svg" width="20px" alt="">
              </nuxt-link>
              <nuxt-link :to="localePath('ru')" class="inline-block padding_0"
                         style="margin-left: 5px; margin-right: 5px;" @click="setLocaleAndReload('ru')">
                <img src="~/assets/ru.svg" width="20px" alt="">
              </nuxt-link>
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
            <h2 class="section_header numbered-header">{{ $t('prices.title') }}:</h2>
            <hr class="divider_30_3 zebra_bg">
            <p>
              {{ $t('prices.desc') }}
            </p>
            <div class="inline-block topmargin_10">
              <ul class="list1 checklist grey">
                <li>{{ $t('prices.startFee') }} <strong>50€</strong></li>
                <li>{{ $t('prices.hourWork') }} 07-22 <strong>100€</strong></li>
                <li>{{ $t('prices.hourWork') }} 22-07 <strong>160€</strong></li>
                <li>{{ $t('prices.winching') }} <strong>160€</strong></li>
                <li>{{ $t('prices.available') }} 24/7</li>
                <li><u>{{ $t('prices.vat') }}</u></li>
              </ul>
              <p>
                <strong>
                  <u>{{ $t('prices.nb') }}</u>
                </strong>
                <br>
                <a href="mailto:puksiir@alfatre.ee">puksiir@alfatre.ee</a>
                <br>
                <a href="tel:+37253300053">+372 53 3000 53</a>
              </p>
            </div>
          </div>
        </div>
        <div class="row topmargin_40">
          <div class="col-md-4 col-sm-4 col-lg-4 col-4" style="vertical-align: top;">
            <div class="h3">{{ $t('licence.agreement') }}</div>
            <a href="#">{{ $t('licence.download') }}</a>
          </div>
          <div class="col-md-4 col-sm-4 col-lg-4 col-4" style="vertical-align: top;">
            <div class="h3">{{ $t('licence.terms') }}</div>
            <p>{{ $t('licence.termsDesc') }}</p>
          </div>
          <div class="col-md-4 col-sm-4 col-lg-4 col-4" style="vertical-align: top;">
            <div class="h3">{{ $t('licence.towTerms') }}</div>
            <a href="#">{{ $t('licence.download') }}</a>
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
              <h3 class="widget-title">{{ $t('contact.title') }}</h3>
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
                  {{ $t('prices.available') }} 24/7
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
const {locale, setLocale, t} = useI18n()
const localePath = useLocalePath()

import '~/assets/animations.css'
import '~/assets/bootstrap.min.css'
import '~/assets/main.css'
import '~/assets/fonts.css'

const setLocaleAndReload = (localePath: string) => {
  setLocale(localePath)
}

const runHead = () => {
  useHead({
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        name: 'description',
        content: t('meta.desc')
      },
      {
        name: 'keywords',
        content: t('meta.keywords')
      },
      {name: 'author', content: 'Alfatre'},
      {name: 'robots', content: 'index, follow'},
      {property: 'og:title', content: t('meta.title')},
      {
        property: 'og:description',
        content: t('meta.desc')
      },
      {property: 'og:image', content: '/public/favicon.png'},
      {property: 'og:url', content: 'veoautopuksiir.ee'},
      {property: 'og:type', content: 'website'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: t('meta.title')},
      {name: 'twitter:title', content: t('meta.desc')},
    ],
    title: t('meta.title'),
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
    ],
    link: [
      {
        href: '/public/favicon.png',
        rel: 'icon'
      }
    ]
  })
}

runHead()

watch(locale, runHead)
</script>
