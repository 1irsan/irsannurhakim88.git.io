const images = document.querySelectorAll('.zoomable-image');
const overlay = document.querySelector('.overlay');
const zoomedImg = document.querySelector('.zoomed-image');

images.forEach(image => {
  image.addEventListener('click', function() {
    this.classList.toggle('zoomed');
    overlay.classList.toggle('active');
    zoomedImg.src = this.src;
  });
});

overlay.addEventListener('click', function() {
  overlay.classList.remove('active');
});
