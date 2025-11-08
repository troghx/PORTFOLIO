document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.querySelector('.speech-bubble');
    const bubbleText = document.querySelector('.bubble-text');

    // Mostrar mensaje inicial
    setTimeout(() => {
        bubbleText.textContent = "¡Hey, hola!";
        bubble.classList.add('visible');

        // Ocultar la burbuja después de 3 segundos
        setTimeout(() => {
            bubble.classList.remove('visible');

            // Mostrar segundo mensaje después de 10 segundos
            setTimeout(() => {
                bubbleText.textContent = "¿Quieres saber más sobre mí?";
                bubble.classList.add('visible');

                setTimeout(() => {
                    bubble.classList.remove('visible');
                }, 10000); // 10 segundos
            }, 10000); // 10 segundos
        }, 3000); // 3 segundos
    }, 1000); // 1 segundo después de cargar la página

    // Desplegable
    document.querySelector('.dropdown-btn').addEventListener('click', function() {
        const content = document.querySelector('.dropdown-content');
        content.classList.toggle('active');
    });
});