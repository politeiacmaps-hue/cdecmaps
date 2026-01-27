const slider = document.getElementById('map-slider');
const overlay = document.querySelector('.img-overlay');

slider.addEventListener('input', (e) => {
    const value = e.target.value;
    overlay.style.width = `${value}%`;
});
