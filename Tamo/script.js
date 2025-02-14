$(document).ready(function () {
  $('.valentines-day').click(function () {
    // Animación del corazón
    $('.heart').css({
      animation: 'fall 3s linear 1',
      '-webkit-animation': 'fall 3s linear 1',
    });
    $('.envelope').fadeOut(800, function () {
      // Ocultar elementos del sobre
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

      // Mostrar la carta, el GIF y los globos
      $('#card').addClass('visible');
      $('.gif-container').addClass('visible');
      $('.balloons').fadeIn(1000);

      // Agregar confeti con animación de festejo
      createConfetti();
    });
  });
});

function createConfetti() {
  const colors = ['#ff6f61', '#ffcc5c', '#88d8b0'];
  const numConfetti = 50;
  for (let i = 0; i < numConfetti; i++) {
    const confetti = $('<div class="confetti"></div>');
    const size = Math.random() * 10 + 10;
    confetti.css({
      width: size + 'px',
      height: size + 'px',
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      position: 'absolute',
      left: Math.random() * window.innerWidth + 'px',
      top: Math.random() * window.innerHeight + 'px',
      animation: 'confetti-fall 2s linear infinite',
    });
    $('body').append(confetti);
  }
}
