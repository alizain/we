import "bootstrap/js/src/collapse"

const $ = jQuery

$('article').on('show.bs.collapse', function (ev) {
  console.log(ev.target)
})

$('article').on('hide.bs.collapse', function () {
  console.log('hiiiiiddding')
})
