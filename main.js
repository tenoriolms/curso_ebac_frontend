const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log('enviado')

    const valueA = document.querySelector('#campoA').value;
    const valueB = document.querySelector('#campoB').value;

    const isValid = valueB > valueA;
    
    if (isValid) {
        alert('Formulário válido e enviado');
    } else {
        alert('Formulário inválido: Valor de A maior que B');
    }
    console.log(isValid);
});