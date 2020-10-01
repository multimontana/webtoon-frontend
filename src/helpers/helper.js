import $ from 'jquery'
export function darkModeToggle (mode) {
  $(document).ready(function () {
    $('body').toggleClass('dark-mode')
    $('.btn-light').toggleClass('btn-dark')
    $('.search-btn').find('svg').toggleClass('active')
    $('.upload-btn').toggleClass('btn-green')
    $('.add-button').toggleClass('btn-dark')
    $('.upload-block').toggleClass('dark')
    $('.dark-btn').toggleClass('dark')
    $('.dark-btn').find('svg').toggleClass('active')
    $('.main-slider-nav ~ .slick-arrows .arrow').toggleClass('btn-dark')
  })
}
