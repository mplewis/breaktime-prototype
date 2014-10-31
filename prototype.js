var pos = 0

var imageOrder = [
  'app-home',
  'mins-left-25',
  'nexus-back',
  'mins-left-21',
  'nexus-back',
  'choose-break-activity',
  'music-activity',
  'back-to-work',
  'mins-left-25',
  'set-mins-left-25',
  'set-mins-left-10',
  'mins-left-10',
  'nexus-back',
  'choose-break-activity',
  'device-home',
  'back-to-work'
  'device-home',
];

function preload(imgSrcUrl) {
  var image = new Image();
  image.src = imgSrcUrl;
}

function fitContent() {
  $('.phone').height($(window).height() * 0.85);
  $('.slide-num').css('font-size', $(window).height() * 0.05);
}

$(window).resize(function() {
  fitContent();
});

function imageUrl(pos) {
  return 'images/' + imageOrder[pos] + '.png';
}

function showSlide(pos) {
  var slideUrl = imageUrl(pos);
  if (slideUrl) {
    $('.phone').attr('src', slideUrl);
    $('.slide-num').text(pos);
  }
}

function prevSlide() {
  if (pos > 0) {
    pos--;
    showSlide(pos);
  }
}

function nextSlide() {
  if (pos < imageOrder.length - 1) {
    pos++;
    showSlide(pos);
  }
}

$('.phone').click(nextSlide);

$(document).keydown(function(e) {
  switch(e.which) {
    case 37: // left
      prevSlide();
      break;

    case 39: // right
      nextSlide();
      break;

    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});

showSlide(pos);
fitContent();

for (var i = 0; i < imageOrder.length; i++) {
  preload(imageUrl(i));
}
