document.addEventListener('DOMContentLoaded' , () => {
    const showMoreBtn =
document.getElementById('showMoreBtn');
    const gallery =
document.querySelector('.gallery');

document.addEventListener('DOMContentLoaded', () => {
    

    const video = document.getElementById('portadaVideo');

    if (video) {
        // Intenta reproducir el video. La promesa permite manejar errores si el navegador lo bloquea.
        video.play().catch(error => {
            console.warn('La reproducción automática del video fue bloqueada por el navegador. El usuario deberá interactuar con la página.');
            // Opcionalmente, puedes mostrar un botón de "Play" para el usuario
        });
    }

    // ... el resto de tu código JS ...
});

    const moreImages = [
    'img/Escudo.jpeg',
    'img/compuesto.jpeg',
    'img/domo-de-lava.jpeg', // Changed
    'img/nevado.jpeg', // No change needed
    'img/fuji.jpeg', // No change needed
];
    showMoreBtn.addEventListener('click', () => {
        moreImages.forEach(src => {
            const img =
document.createElement('img');
            img.src = src;
            img.alt = 'Más fotos de los volcanes';
            gallery.appendChild(img);
        });
        //Ocultar el botón después de mostrar las imágenes
        showMoreBtn.style.display = 'none';
    });
});