(function(){
    // Seleccionamos todos los encabezados/títulos de las preguntas
    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Obtenemos el elemento con la respuesta (el párrafo que le sigue al título)
            const answer = question.nextElementSibling;

            // Alternamos la clase .active en la respuesta
            answer.classList.toggle('active');

            // Opcional: Si deseas rotar el ícono de la flecha al hacer click
            const arrow = question.querySelector('.questions__arrow');
            if (arrow) {
                arrow.classList.toggle('questions__arrow--rotate');
            }
        });
    });
})();