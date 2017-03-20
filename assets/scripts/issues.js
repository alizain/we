import "bootstrap/js/src/collapse"

const $ = jQuery
window.$ = jQuery

$('article').on('show.bs.collapse', function (ev) {
  $(ev.target).parents('.item').addClass('expanded').removeClass('contracted')
})

$('article').on('hide.bs.collapse', function (ev) {
  $(ev.target).parents('.item').removeClass('expanded').addClass('contracted')
})
