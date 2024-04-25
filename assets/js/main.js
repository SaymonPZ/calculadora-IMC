(function () {
    const peso = document.querySelector("#pesoInput");
    const altura = document.querySelector("#alturaInput");
    const buttonSet = document.querySelector("#enviar");

    buttonSet.addEventListener("click", () => {
        event.preventDefault();

        if (!(peso.value == '' || altura.value == '')) {
            calculatorIMC.calcular(peso, altura);
        }
    });
})();

let calculatorIMC = {
    calcular(peso, altura) {
        const result = peso.value / (altura.value ** 2);
        this.draw(result.toFixed(2));
    },
    draw(imcResult) {
        const colorResults = document.querySelector('.colorResults');
        const printResult = document.querySelector('.resultado');

        if (imcResult > 0 && imcResult < 18.5) {
            printResult.innerText = `Resultado: ${imcResult}, você está abaixo do peso.`;
            colorResults.style = 'background-color: #80D8FF';
        } else if (imcResult >= 18.5 && imcResult < 25) {
            printResult.innerText = `Resultado: ${imcResult}. Você está com peso normal.`;
            colorResults.style = 'background-color: #AED581';
        } else if (imcResult >= 25 && imcResult < 29.9) {
            printResult.innerText = `Resultado: ${imcResult}, você está com sobrepeso.`;
            colorResults.style = 'background-color: #FFB74D';
        } else if (imcResult >= 29.9 && imcResult < 39.9) {
            printResult.innerText = `Resultado: ${imcResult}, você está com obsidade.`;
            colorResults.style = 'background-color: #FF7043';
        } else if (imcResult >= 39.9 && imcResult != Infinity) {
            printResult.innerText = `Resultado: ${imcResult}, você está com obsidade grave`;
            colorResults.style = 'background-color: #E53935';
        } else {
            printResult.innerText = `Insira valores validos`;
            colorResults.style = 'background-color: #fff';
        }
    }
}


