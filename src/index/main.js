import './scss/styles.scss'
import Choices from 'choices.js'
import 'choices.js/public/assets/styles/choices.min.css'
import $ from 'jquery'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { debounce } from 'lodash'

import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import jump from 'jump.js'

import 'parsleyjs'

const mobileWidth = 840

// window.addEventListener('load', () => {
//   const loader = document.querySelector('.loader')
//   loader.classList.add('loader--loaded')
// })

document.addEventListener('DOMContentLoaded', () => {
  // Preloader fake

  const loader = document.querySelector('.loader')
  setTimeout(() => {
    loader.classList.add('loader--loaded')
  }, 3000)

  // Custom select
  const choicesOptions = {
    itemSelectText: ''
  }
  new Choices('#upper-domain', choicesOptions)

  // Menu

  const menuButton = document.querySelector('.main-nav__menu-open')
  const menu = document.querySelector('.main-nav__list')
  const menuOverlay = document.querySelector('.main-nav__overlay')

  menuButton.addEventListener('click', event => {
    event.preventDefault()
    menu.classList.add('shown')
    menuOverlay.classList.add('shown')
    menuButton.setAttribute('aria-expanded', true)
    disableBodyScroll(menu)
  })

  menuOverlay.addEventListener('click', event => {
    event.preventDefault()
    menu.classList.remove('shown')
    menuOverlay.classList.remove('shown')
    menuButton.setAttribute('aria-expanded', false)
    enableBodyScroll(menu)
  })

  window.addEventListener(
    'resize',
    debounce(() => {
      if (window.innerWidth > mobileWidth) {
        menu.classList.remove('shown')
        menuOverlay.classList.remove('shown')
        menuButton.setAttribute('aria-expanded', false)
        enableBodyScroll(menu)
      }
    }, 200)
  )

  // Smooth scrolling

  const toTopLink = document.querySelector('.page-footer__to-top')
  toTopLink.addEventListener('click', event => {
    const anchor = event.target.getAttribute('href')
    const jumpTarget = document.querySelector(anchor)
    if (jumpTarget) {
      jump(jumpTarget)
    } else {
      console.log('No jump target found')
    }
  })

  // Slider

  $('.clients__people-list')
    .on('destroy', function(evt, slick) {
      let carousel = $(this)
      let reinit = debounce(function() {
        /*
         * slick.activeBreakpoint will tell us the breakpoint
         * at which the carousel was destroyed.
         */
        if (slick.activeBreakpoint < window.innerWidth) {
          return
        }

        // Re-initialize with the old settings.
        carousel.slick(slick.options)

        // Remove this event listener.
        window.removeEventListener('resize', reinit)
      }, 250)
      // Assign our debounced callback to window.resize.
      window.addEventListener('resize', reinit)
    })
    .slick({
      infinite: true,
      dots: true,
      arrows: false,
      focusOnSelect: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: mobileWidth,
          settings: 'unslick'
        }
      ]
    })
})
